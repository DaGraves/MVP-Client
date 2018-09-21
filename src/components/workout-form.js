import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {saveWorkout} from '../actions/workouts';
import {required, nonEmpty, isTrimmed} from '../validators';
import { hasTouch } from 'detect-touch';

import './workout-form.css';

export class WorkoutForm extends React.Component {
    getBurnedCalories(exerciseTime, exerciseType) {
      return fetch(`https://trackapi.nutritionix.com/v2/natural/exercise`, {
            method: 'POST',
            headers: {
                'x-app-id': "90ca78fe",
                'x-app-key': "dacc0f95110653085d49f04c0a2be0b1",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "query": `${exerciseTime} min ${exerciseType}`,
            })
        })
        .then(res => {
            return res.json();
        })
        .then(results => {
            const caloriesBurned = results.exercises[0]["nf_calories"];
            return caloriesBurned;
        })
        .catch(err => {
            return err;
        });
    }

    onSubmit(values) {
        console.log(this.props);
        const {exerciseTime, exerciseType} = values;
        this.getBurnedCalories(exerciseTime, exerciseType)
        .then(caloriesBurned => {
            values.caloriesBurned = caloriesBurned;
             this.props.dispatch(saveWorkout(values));
             if (hasTouch === false){
                return this.props.history.push("/dashboard");
            }
             
        });
    }

    render() {
        let swipeLeft;
        if (hasTouch === true){
            swipeLeft = (
                <h3>Swipe Left to See Past Logs</h3>
            )
        }

        return(
            <form className="workout-form"
            onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
            )}>
            <legend className="form-title">Log Workout</legend>
            {swipeLeft}
            <fieldset>
                <div className="general-inputs">
                    <div className="field-container">
                        <label htmlFor="date">Date:</label>
                        <Field component={Input} type="date" name="date"
                        validate={[required, nonEmpty, isTrimmed]}/>
                    </div>
                    <div className="field-container">
                    <label htmlFor="exerciseType">Exercise Type:</label><br/>
                        <Field
                            component="select"
                            name="exerciseType"
                            validate={[required]}>
                            <option></option>
                            <option value="Walking">Walking</option>
                            <option value="Jogging">Jogging</option>
                            <option value="Running">Running</option>
                            <option value="Swimming">Swimming</option>
                            <option value="HIIT">HIIT</option>
                            <option value="Calisthenics">Calisthenics</option>
                            <option value="Weight lifting">Weight lifting</option>
                            <option value="Cycling">Cycling</option>
                        </Field>
                    </div>
                    <div className="field-container">
                        <label htmlFor="liftTime">Time spent exercising (minutes):</label>
                        <Field
                            component={Input}
                            type="number"
                            name="exerciseTime"
                            validate={[required, nonEmpty, isTrimmed]} />
                    </div>
                    
                    <div className="field-container">
                    <label htmlFor="notes">Notes:</label><br/>
                        <Field
                            component="textarea"
                            name="notes"
                            />
                    </div>
                </div>
                <div className="submit-btn-box">
                    <button
                        className="submit-btn"
                        type="submit"
                        disabled={this.props.pristine || this.props.submitting}>
                        Submit
                    </button>
                </div>
            </fieldset>
            </form>
        );
    }
}

export default reduxForm({
    form: 'workoutForm',
    onSubmitFail: (errors, dispatch) => dispatch(focus('workoutName', 'date','exerciseTime', 'exerciseType', 'notes'))
})(WorkoutForm);




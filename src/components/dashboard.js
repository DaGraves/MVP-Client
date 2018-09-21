import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import {retrieveWorkouts, getWorkouts, removeWorkout} from '../actions/workouts';
import SwipeableViews from 'react-swipeable-views';
import WorkoutForm from './workout-form';
import Card from './card';
import {Link} from 'react-router-dom';
import { hasTouch } from 'detect-touch';


import './dashboard.css';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
        this.props.dispatch(retrieveWorkouts())
        .then(results => {
            return this.props.dispatch(getWorkouts(results));
        })
    }

getId(id) {
    this.props.dispatch(removeWorkout(id))
    this.props.dispatch(retrieveWorkouts())
    .then(results => {
        return this.props.dispatch(getWorkouts(results));
    });


}

    render() {
        const workouts = this.props.exercises.map((workout, index) => 
        <li className="card" key={index}>
            <Card handleClick={(id) => this.getId(id)} {...workout} />
        </li>
        )
        let mobile;
        if (hasTouch === true){
            mobile = (
                <SwipeableViews>
                <WorkoutForm></WorkoutForm>
                {workouts}
            </SwipeableViews>
            )
        }
        let desktop;
        if (hasTouch === false){
            desktop = (
                <div>
                    <Link className="button-link" to="/workouts">+ Add New Workout</Link>
                    <h2>Past Workouts</h2>
                    {workouts}
                </div>
            )
        }

        return (
            <div className="dashboard-container">
                <ul className="workout-list">
                    <div className="desktop-cards">
                    {desktop}
                    </div>
                    {mobile}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
      exercises: state.workoutsReducer.workouts
});

export default requiresLogin()(connect(mapStateToProps)(Dashboard));

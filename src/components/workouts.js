import React from 'react';
import {connect} from 'react-redux';
import WorkoutForm from './workout-form';

import './workouts.css';

export class Workouts extends React.Component {
    render() {
        return(
            <section className="workout-container">
                <div className="workout-form-box">
                    <WorkoutForm history={this.props.history}/>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Workouts);
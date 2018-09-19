import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {Link} from 'react-router-dom';
import {fetchProtectedData} from '../actions/protected-data';
import {retrieveWorkouts, getWorkouts, removeWorkout} from '../actions/workouts';
import Card from './card';


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
    console.log('test');
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
        return (
            <section className="dashboard-container">
                <h1>Dashboard</h1>
                <Link className="log-workout-btn" to="/workouts">Log Workout</Link>
                <ul className="workout-list">
                {workouts}
                </ul>
            </section>
        );
    }
}

const mapStateToProps = state => ({
      exercises: state.workoutsReducer.workouts
});

export default requiresLogin()(connect(mapStateToProps)(Dashboard));

import React from 'react';

import './card.css';

export default function Card(props) {
    return (
        <div data={props.id} className="card-container">
            <p className="card-title"><b>Workout Name:</b> {props.name}</p>
            <p className="card-date"><b><i className="far fa-calendar-alt"></i> Date:</b> {props.date}</p>
            <p className="card-exercise"><b><i className="fas fa-dumbbell"></i> Exercise:</b> {props.exerciseType}</p>
            <p className="card-time"><b><i className="far fa-clock"></i> Time:</b> {props.exerciseTime} minutes</p>
            <p className="card-calories"><b><i className="fas fa-fire"></i> Calories Burned:</b> {props.caloriesBurned}</p>
            <p className="card-notes"><b><i className="far fa-sticky-note"></i> Notes:</b> {props.notes}</p>
            <button onClick={() => props.handleClick(props.id)} type="button" className="exit-btn">Delete</button>
        </div>
    );
}
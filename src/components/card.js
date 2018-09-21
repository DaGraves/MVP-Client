import React from 'react';

import './card.css';

export default function Card(props) {
    return (
        <div data={props.id} className="card-container">
            
            <p className="card-date"><b>Date:</b> {props.date}</p>
            <p className="card-exercise"><b>Exercise:</b> {props.exerciseType}</p>
            <p className="card-time"><b>Time:</b> {props.exerciseTime} minutes</p>
            <p className="card-calories"><b>Calories Burned:</b> {props.caloriesBurned}</p>
            <p className="card-notes"><b>Notes:</b> {props.notes}</p>
            <button onClick={() => props.handleClick(props.id)} type="button" className="exit-btn">Delete</button>
        </div>
    );
}
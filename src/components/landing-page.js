import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import './landing-page.css';

export function LandingPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="welcome-container">
            <h1 className="welcome-title">Welcome to Calories R Gone</h1>
            <div className="welcome-body">
                <p>A easy to use workout tracker that calculates your calories burned for you. Simply, choose the type 
                of exercise you did and log the duration. Look at past workouts easily in your dashboard.</p>
                <p>To get a full expeirence of this app. Login using the username of "guest" and password of "password1"</p>
            </div>
            </div>

        
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);

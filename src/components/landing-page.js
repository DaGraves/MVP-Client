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
                <p>This is a quick and easy app that allows you to log in your workout and see the calories that you burned.</p>
                <p>To get a full expeirence of this app. Login using the username of "guest" and password of "password1!"</p>
            </div>
            </div>

        
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);

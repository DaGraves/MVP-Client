import React from 'react';
import {connect} from 'react-redux';
import { Redirect} from 'react-router-dom';

import LoginForm from './login-form';
import './registration-page.css';

export function LoginPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <section className="register-container">
             <LoginForm />
        </section>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);

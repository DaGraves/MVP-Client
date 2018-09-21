import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {Link} from 'react-router-dom';

import './header-bar.css';

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        let dashboardButton;
        let logOutButton;
        if (this.props.loggedIn) {
            dashboardButton = (
                <Link className="link" to="/dashboard">Dashboard</Link>
            )   
            logOutButton = (
                <button className="logout-link" onClick={() => this.logOut()}>Log out</button>
            );
        }
        let registerButton;
        let loginButton;
        if (this.props.loggedOut){
            registerButton = (
                <Link className="link" to="/register">Register</Link>
            )
            loginButton = (
                <Link className="link" to="/login">Login</Link>
            )
        }
        return (
            <header className="nav-container">
                <div className="logo">
                    <img
                    className="logo"
                    src={require('../images/logo.png')}
                    alt="CRG Logo">
                    </img>
                </div>
                <nav className="nav-links">
                    {registerButton}
                    {dashboardButton}
                    {logOutButton}
                    {loginButton}
                </nav>
                <div className="menu-toggle"><i class="fa fa-bars" aria-hidden="true"></i></div>
            </header>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    loggedOut: state.auth.currentUser === null
});

export default connect(mapStateToProps)(HeaderBar);

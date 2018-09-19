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
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button className="logout-link" onClick={() => this.logOut()}>Log out</button>
            );
        }
        return (
            <header className="nav-container">
                <nav className="nav-links">
                    <Link className="link" to="/login">Login</Link>
                    <Link className="link" to="/register">Sign Up</Link>
                    <Link className="link" to="/dashboard">Dashboard</Link>
                    {logOutButton}
                </nav>
                <div className="menu-toggle"><i class="fa fa-bars" aria-hidden="true"></i></div>
            </header>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);

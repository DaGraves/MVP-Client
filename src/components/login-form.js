import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
import {Link} from 'react-router-dom';

//CSS
import './login-form.css';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <section className="login-container">
                <form className="form-container"
                onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                        <legend className="login-title">Login</legend>
                        <fieldset>
                            <div className="input-container">
                                <label htmlFor="username">Username:</label><br/>
                                <Field 
                                    className="login-input" 
                                    component={Input}
                                    type="text" 
                                    name="username" 
                                    id="username" 
                                    validate={[required, nonEmpty]} />
                            </div>
                            {error}
                            <div className="input-container">
                                <label htmlFor="password">Password:</label>
                                <Field 
                                className="login-input"
                                component={Input} 
                                type="password" 
                                name="password" 
                                id="password" 
                                validate={[required, nonEmpty]}/>
                            </div>
                            <button 
                                className="login-btn" 
                                type="submit"
                                disabled={this.props.pristine || this.props.submitting}>
                                Log In
                            </button>
                        </fieldset>
                        <Link className="register-link" to="/register">Click here to register</Link>
                </form>
            </section>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);

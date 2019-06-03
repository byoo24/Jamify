import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo';
import Input from './_input';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginDemo = this.loginDemo.bind(this);
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }



    loginDemo(e) {
        const demo = {
            username: "puppylover",
            password: "husky123",
            email: "puppy@email.com"
        };

        this.props.login(demo)
            .then(() => this.props.history.push('/browse/featured'));
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user)
            .then(() => this.props.history.push('/browse'));
    }


    render() {
        const { errors } = this.props;
        let invalidUsername = null;
        let invalidPassword = null;
        let classUsername = 'form-control';
        let classPassword = 'form-control';

        const invalidUsernamePassword = errors[0] && errors[0].indexOf('Incorrect') != -1 ? <div className="alert alert-warning">{errors[0]}</div> : null;

        if (errors.includes('username')) {
            invalidUsername = <div className="invalid-input">Please enter your Jamify username.</div>
            classUsername = 'form-control invalid';
        } else {
            invalidUsername = null;
            classUsername = 'form-control';
        }

        if (errors.includes('password')) {
            invalidPassword = <div className="invalid-input">Please enter your password.</div>
            classPassword = 'form-control invalid';
        } else {
            invalidPassword = null;
            classPassword = 'form-control';
        }

        return (
            <div className="login-container">
                <div className="login-header">
                    <Logo />
                </div>
                <div className="login-content">
                    <span id="login-to-continue">To continue, log in to Jamify</span>
                    <a className="demo-login" onClick={() => this.loginDemo()}>DEMO LOGIN</a>
                    <span className="or">OR</span>


                    { invalidUsernamePassword }

                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <label htmlFor="login-username" className="sr-only">Username</label>
                        <input type="text"
                                className={classUsername}
                                placeholder="Username" 
                                onChange={this.update('username')} />
                            { invalidUsername }

                        <label htmlFor="login-password" className="sr-only">Password</label>
                        <input type="password" 
                            className={classPassword} 
                                placeholder="Password" 
                                onChange={this.update('password')} /> 
                            { invalidPassword }

                        <div className="submit-row">
                            <label className="checkbox-label">
                                <input type="checkbox"/>Remember me
                                <span className="checkbox-control"></span>
                            </label>

                            <label className="login-row-container">
                                <button className="btn-login">LOG IN</button>
                            </label>
                        </div>
                    </form>

                    <h3 className="no-account">Don't have an account?</h3>
                    <Link to="/signup" className="sign-up-btn">SIGN UP FOR JAMIFY</Link>

                </div>
            </div>
        )
    }
}

export default Login;
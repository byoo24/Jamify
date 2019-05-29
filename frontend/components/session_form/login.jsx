import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo';

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

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    loginDemo(e) {
        const demo = {
            username: "puppy",
            password: "husky123",
            email: "puppy@email.com"
        };

        this.props.login(demo)
            .then(() => this.props.history.push('/browse'));
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user)
            .then(() => this.props.history.push('/browse'));
    }


    render() {
        return (
            <div className="login-container">
                <div className="login-header">
                    <Logo />
                </div>
                <div className="login-content">
                    <span id="login-to-continue">To continue, log in to Jamify</span>
                    <a className="demo-login" onClick={() => this.loginDemo()}>DEMO LOGIN</a>
                    <span className="or">OR</span>

                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <label htmlFor="login-username" className="sr-only">Username</label>
                        <input type="text" 
                                className="form-control" 
                                placeholder="Username" 
                                onChange={this.update('username')}
                                required/>

                        <label htmlFor="login-password" className="sr-only">Password</label>
                        <input type="password" 
                                className="form-control" 
                                placeholder="Password" 
                                onChange={this.update('password')}
                                required/>

                        <div className="submit-row">
                            <label className="checkbox-label">
                                <input type="checkbox"/>Remember me
                                <span className="checkbox-control"></span>
                            </label>

                            <label className="submit-form">
                                <button className="btn-submit">LOG IN</button>
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
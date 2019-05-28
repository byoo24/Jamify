import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            dob_month: "",
            dob_day: "",
            dob_year: "",
            gender: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user)
            .then( () => this.props.history.push('/browse'));
    }

    render() {
        return (
            <div className="login-container">
                <div className="login-header">
                    <Logo />
                </div>
                <div className="login-content">
                    <span id="sign-up-with-email">Sign up with your email address</span>
                    

                    <form className="signup-form" onSubmit={this.handleSubmit}>
                        <label htmlFor="signup-username" className="sr-only">Username</label>
                        <input type="text"
                                id="signup-username"
                                className="form-control"
                                placeholder="Username"
                                onChange={this.update('username')}
                                required />

                        <label htmlFor="signup-email" className="sr-only">Email</label>
                        <input type="email" 
                                id="signup-email"
                                className="form-control" 
                                placeholder="Email" 
                                onChange={this.update('email')}
                                required />

                        <label htmlFor="signup-password" className="sr-only">Password</label>
                        <input type="password" 
                                className="form-control" 
                                placeholder="Password"
                                onChange={this.update('password')}
                                required />

                        <div className="register-dob">
                            <label htmlFor="register-age">Date of birth</label>

                            <div className="register-dob-container">
                                <div className="controls controls-month">
                                    <select id="register-dob-month" onChange={this.update('dob_month')}>
                                        <option value defaultValue>Month</option>
                                        <option value="01">January</option>
                                        <option value="02">February</option>
                                        <option value="03">March</option>
                                        <option value="04">April</option>
                                        <option value="05">May</option>
                                        <option value="06">June</option>
                                        <option value="07">July</option>
                                        <option value="08">August</option>
                                        <option value="09">September</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
                                    </select>
                                </div>

                                <div className="controls controls-day">
                                    <input type="number" placeholder="Day" onChange={this.update('dob_day')} />
                                </div>

                                <div className="controls controls-year">
                                    <input type="number" placeholder="Year" onChange={this.update('dob_year')} />
                                </div>
                            </div>
                        </div>

                        <div className="gender">
                            <label className="sr-only">Gender</label>
                            <label htmlFor="reg-male" className="radio-control">
                                <input type="radio" 
                                        id="reg-male" 
                                        name="gender"
                                        value="Male"
                                        onChange={this.update('gender')} />Male
                            </label>
                            <label htmlFor="reg-female" className="radio-control">
                                <input type="radio" 
                                        id="reg-female" 
                                        name="gender"
                                        value="Female" 
                                        onChange={this.update('gender')} />Female
                            </label>
                            <label htmlFor="reg-non-binary" className="radio-control">
                                <input type="radio" 
                                        id="reg-non-binary" 
                                        name="gender"
                                        value="Non-binary"
                                        onChange={this.update('gender')} />Non-binary
                            </label>
                        </div>

                        <div className="submit-row">

                            <label className="submit-form">
                                <button className="btn-submit">SIGN UP</button>
                            </label>
                        </div>
                    </form>

                    <h3 className="no-account">Already have an account?</h3>
                    <Link to="/login" className="sign-up-btn">Login</Link>

                </div>
            </div>
        )
    }
}

export default SignUp;
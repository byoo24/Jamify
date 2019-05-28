import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
    }

    logoutUser() {
        this.props.logout()
            .then(() => this.props.history.push('/'));
    }

    render() {
        const { currentUser } = this.props;
        const display = currentUser ? (
            <div className="nav-main">
                <h3 className="nav-welcome">Welcome {currentUser.username}!</h3>
                <button onClick={this.logoutUser} className="nav-logout">Logout</button>
            </div>
        ) : (
            <ul className="nav-main">
                <Link className="btn" to="/signup">Sign Up</Link>
                <Link className="btn" to="/login">Log In</Link>
            </ul>
        );

        return (
            <header id="header">
                <nav id="nav">
                    <div className="nav-container">
                        <Logo />
                        { display }
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
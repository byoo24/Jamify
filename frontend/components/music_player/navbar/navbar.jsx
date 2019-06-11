import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../logo';


class Navbar extends React.Component {
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
        const displayUser = currentUser ? (
            <div className="navbar-user">
                <Link to='/browse'>
                    <i className="nav-icon spoticon-user-16"></i>
                    <span className="navbar-username">{currentUser.username}</span>
                </Link>

                <span 
                    onClick={() => this.logoutUser()} 
                    className="user-logout">
                    <i className="nav-icon spoticon-arrow-left-16"></i>
                        logout</span>
            </div>
        ) : (
            null
        );

        return(
            <div className="Root__navbar">
                <div className="navbar-container">

                    

                    <ul className="navbar">
                        <li className="logo-container">
                            <Logo />
                        </li>
                        <li>
                            <NavLink  to='/browse' activeClassName="active">
                                <i className="nav-icon spoticon-home-16"></i>
                                <span className="navbar-text navbar-search">Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/search' activeClassName="active">
                                <i className="nav-icon spoticon-search-16"></i>
                                <span className="navbar-text navbar-search">Search</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/collection' activeClassName="active">
                                <i className="nav-icon spoticon-collection-16"></i>
                                <span className="navbar-text navbar-library">Your Library</span>
                            </NavLink>
                        </li>
                    </ul>

                    {displayUser}
                    
                </div>

            </div>
        )
    }
}


export default Navbar;


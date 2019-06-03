import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../logo';


class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { currentUser } = this.props;
        const displayUser = currentUser ? (
            <div className="navbar-user">
                <Link to='/browse'>
                    <i className="far fa-user"></i>
                    <span className="navbar-username">{currentUser.username}</span>
                </Link>
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
                            <NavLink  to='/browse/featured' activeClassName="active">
                                <i className="fas fa-home"></i>
                                <span className="navbar-text navbar-search">Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/search' activeClassName="active">
                                <i className="fas fa-search"></i>
                                <span className="navbar-text navbar-search">Search</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/collection/playlists' activeClassName="active">
                                <i className="fas fa-book"></i>
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


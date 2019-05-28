import React from 'react';
import { Link } from 'react-router-dom';


const Logo = () => (
    <div className="logo">
        <Link to="/">
            <i className="fab fa-spotify"></i>
            <span className="brand">Jamify</span>
        </Link>
    </div>
);

export default Logo;



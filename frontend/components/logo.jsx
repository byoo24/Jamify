import React from 'react';
import { Link } from 'react-router-dom';


const Logo = () => (
    <div className="logo">
        <Link to="/" className="logo-wrap">
            <i className="logo-icon spoticon-spotifylogo-32"></i>
            <span className="brand">Jamify</span>
        </Link>
    </div>
);

export default Logo;



import React from 'react';
import { Link } from 'react-router-dom';


export default () => {
    return (
        <div className="page-not-found blue-gradient">
            <div className="page-not-found-container">
                    <div className="page-not-found-wrapper">
                        <div className="page-not-found-img"></div>
                        <h1>This is not a valid page</h1>
                        <h3>Go back and enjoy music!</h3>
                        <Link to="/" className="btn btn-green page-not-found-btn">Home Page</Link>
                    </div>
                </div>
        </div>
    );
}
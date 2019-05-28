import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const msp = state => ({
    loggedIn: Boolean(state.session.currentUser),
});

// <AuthRoute path="" component={} />
const Auth = ({ component: Component, path, loggedIn }) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Redirect to="/browse" /> : <Component {...props} />
        )} />
);


const Protected = ({ component: Component, path, loggedIn }) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
        )} />
);


export const AuthRoute = withRouter(connect(msp)(Auth));
export const ProtectedRoute = withRouter(connect(msp)(Protected));
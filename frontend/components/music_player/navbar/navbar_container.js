import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Navbar from './navbar';
import { logout } from '../../../actions/session_actions';

const msp = state => ({
    currentUser: state.session.currentUser
});

const mdp = dispatch => ({
    logout: () => dispatch(logout())
});


export default withRouter(connect(msp, mdp)(Navbar));
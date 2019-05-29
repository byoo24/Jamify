import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Navbar from './navbar';

const msp = state => ({
    currentUser: state.session.currentUser
});


export default withRouter(connect(msp)(Navbar));
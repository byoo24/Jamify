
import React from 'react';
import { Route } from 'react-router-dom';

import LandingPage from './landing_page/landing_page';
import Session from './session_form/login_container';
import SignUp from './session_form/sign_up_container';
import MusicPlayer from './music_player/music_player_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

export default () => (
    <>
        <Route exact path="/" component={LandingPage} />
        <AuthRoute path="/signup" component={SignUp} />
        <AuthRoute path="/login" component={Session} />
        <ProtectedRoute path="/browse" component={MusicPlayer} />
    </>
);


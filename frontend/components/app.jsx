
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './landing_page/landing_page';
import Session from './session_form/login_container';
import SignUp from './session_form/sign_up_container';
import MusicPlayer from './music_player/music_player_container';
import PageNotFound from './404/page_not_found';

import { AuthRoute, ProtectedRoute } from '../util/route_util';


import ModalPlaylist from './playlists/modal_playlists';

export default () => (
    <>
        <ModalPlaylist />
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <AuthRoute path="/signup" component={SignUp} />
            <AuthRoute path="/login" component={Session} />
            <ProtectedRoute path="/browse" component={MusicPlayer} />
            <ProtectedRoute path="/search" component={MusicPlayer} />
            <ProtectedRoute path="/collection" component={MusicPlayer} />
            <ProtectedRoute path="/playlist/:playlistId" component={MusicPlayer} />
            <Route path="/" component={PageNotFound} />
        </Switch>
    </>
);


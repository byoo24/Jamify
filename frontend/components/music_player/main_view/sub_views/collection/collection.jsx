import React from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';

import Playlists from './_playlists';
import FavoriteSongs from './_tracks';
import Albums from './_albums';
import Artists from './_artists';
import Podcasts from './_podcasts';



class Collection extends React.Component {
    componentDidMount() {
        this.props.history.push('/collection/playlists');
    }

    // componentWillUpdate() {
    //     this.props.history.push('/collection/playlists');
    // }

    render() {
        // debugger
        return (
            <div className="Root__main_view_container">
                <div className="sub-nav">
                    <ul className="sub-nav-container">
                        <li><NavLink to="/collection/playlists" className="sub-nav-item">Playlists</NavLink></li>
                        <li><NavLink to="/collection/tracks" className="sub-nav-item">Favorite Songs</NavLink></li>
                        <li><NavLink to="/collection/albums" className="sub-nav-item">Albums</NavLink></li>
                        <li><NavLink to="/collection/artists" className="sub-nav-item">Artists</NavLink></li>
                        <li><NavLink to="/collection/podcasts" className="sub-nav-item">Podcasts</NavLink></li>
                    </ul>
                </div>

                <section className="browse-view">
                    <Switch>
                        <Route exact path="/collection/playlists" component={Playlists} />
                        <Route exact path="/collection/tracks" component={FavoriteSongs} />
                        <Route exact path="/collection/albums" component={Albums} />
                        <Route exact path="/collection/artists" component={Artists} />
                        <Route exact path="/collection/discover" component={Podcasts} />
                    </Switch>
                </section>
            </div>
        );
    }
}


export default Collection;


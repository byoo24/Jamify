import React from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';

import PlaylistIndex from './_playlistIndex';
import FavoriteSongs from './_tracks';
import Albums from './_albums';
import Artists from './_artists';
import Podcasts from './_podcasts';




class Collection extends React.Component {
    constructor(props) {
        super(props);
        this.changeBg = this.changeBg.bind(this);
    }

    changeBg(classBg) {
        const bg = document.getElementById('bg-gradient');
        bg.className = '';

        if (classBg) {
            bg.classList.add(classBg);
        }
    }

    render() {

        return (
            <div className="Root__main_view_container">
                
                <div className="collection-header">
                    <div className="sub-nav">
                        <ul className="sub-nav-container">
                            <li><NavLink to="/collection/playlists" className="sub-nav-item">Playlists</NavLink></li>
                            <li><NavLink to="/collection/tracks" className="sub-nav-item">Favorite Songs</NavLink></li>
                            <li><NavLink to="/collection/albums" className="sub-nav-item">Albums</NavLink></li>
                            <li><NavLink to="/collection/artists" className="sub-nav-item">Artists</NavLink></li>
                            <li><NavLink to="/collection/podcasts" className="sub-nav-item">Podcasts</NavLink></li>
                        </ul>
                    </div>
                    
                    <div className="btn-wrap">
                        <button className="btn btn-green add-new-playlist" onClick={this.props.openModal}>New Playlist</button>
                    </div>
                    
                </div>

                <section className="browse-view">
                    <Switch>
                        <Route exact path="/collection/playlists" render={() => <PlaylistIndex changeBg={this.changeBg} />} />
                        <Route exact path="/collection/tracks" render={() => <FavoriteSongs changeBg={this.changeBg} />} />
                        <Route exact path="/collection/albums" render={() => <Albums changeBg={this.changeBg} />} />
                        <Route exact path="/collection/artists" render={() => <Artists changeBg={this.changeBg} />} />
                        <Route exact path="/collection/podcasts" render={() => <Podcasts changeBg={this.changeBg} />} />
                    </Switch>
                </section>
            </div>
        );
    }
}


export default Collection;


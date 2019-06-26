import React from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';

import Artists from './_artists';
import Albums from './_albums';
import Charts from './_charts';
import Genres from './_genres';
import NewReleases from './_new_releases';
import Discover from './_discover';



class Browse extends React.Component {
    constructor(props) {
        super(props);
        this.changeBg = this.changeBg.bind(this);
    }

    changeBg(classBg) {
        const bg = document.getElementById('bg-gradient');
        bg.className = '';

        if(classBg) {
            bg.classList.add(classBg);
        }
    }

    render() {
        return(
            <div className="Root__main_view_container">
                <div className="collection-header">
                    <div className="sub-nav">
                        <ul className="sub-nav-container">
                            <li><NavLink to="/browse/artists" className="sub-nav-item">Artists</NavLink></li>
                            <li><NavLink to="/browse/albums" className="sub-nav-item">Albums</NavLink></li>
                            <li><NavLink to="/browse/genres" className="sub-nav-item">Genres Moods</NavLink></li>
                            <li><NavLink to="/browse/newreleases" className="sub-nav-item">New Releases</NavLink></li>
                        </ul>
                    </div>
                </div>

                <Switch>
                    <Route exact path="/browse/artists" render={() => <Artists changeBg={this.changeBg} />} />
                    <Route exact path="/browse/albums" render={() => <Albums changeBg={this.changeBg} />} />
                    <Route exact path="/browse/charts" render={() => <Charts changeBg={this.changeBg} />} />
                    <Route exact path="/browse/genres" render={() => <Genres changeBg={this.changeBg} />} />
                    <Route exact path="/browse/newreleases" render={() => <NewReleases changeBg={this.changeBg} />} />
                    <Route exact path="/browse/discover" render={() => <Discover changeBg={this.changeBg} />} />
                    <Redirect to="/browse/artists" />
                </Switch>
            </div>
        );
    }
}


export default Browse;
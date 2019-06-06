import React from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';

import Featured from './_featured';
import Podcasts from './_podcasts';
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
                            <li><NavLink to="/browse/featured" className="sub-nav-item">Featured</NavLink></li>
                            <li><NavLink to="/browse/podcasts" className="sub-nav-item">Podcasts</NavLink></li>
                            <li><NavLink to="/browse/charts" className="sub-nav-item">Charts</NavLink></li>
                            <li><NavLink to="/browse/genres" className="sub-nav-item">Genres Moods</NavLink></li>
                            <li><NavLink to="/browse/newreleases" className="sub-nav-item">New Releases</NavLink></li>
                            <li><NavLink to="/browse/discover" className="sub-nav-item">Discover</NavLink></li>
                        </ul>
                    </div>

                    <Switch>
                        <Route exact path="/browse/featured" render={() => <Featured changeBg={this.changeBg} />} />
                        <Route exact path="/browse/podcasts" render={() => <Podcasts changeBg={this.changeBg} />} />
                        <Route exact path="/browse/charts" render={() => <Charts changeBg={this.changeBg} />} />
                        <Route exact path="/browse/genres" render={() => <Genres changeBg={this.changeBg} />} />
                        <Route exact path="/browse/newreleases" render={() => <NewReleases changeBg={this.changeBg} />} />
                        <Route exact path="/browse/discover" render={() => <Discover changeBg={this.changeBg} />} />
                    </Switch>
                </div>
            </div>
        );
    }
}


export default Browse;
import React from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';

import Featured from './_featured';
import Podcasts from './_podcasts';
import Charts from './_podcasts';
import Genres from './_genres';
import NewReleases from './_new_releases';
import Discover from './_discover';



class Browse extends React.Component {
    componentDidMount() {
        this.props.history.push('/browse/featured');
    }

    // componentWillUpdate() {
    //     this.props.history.push('/browse/featured');
    // }

    render() {
        // debugger
        return(
            <div className="Root__main_view_container">
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

                <section className="browse-view"> 
                    <Switch>
                        <Route exact path="/browse/featured" component={Featured} />
                        <Route exact path="/browse/podcasts" component={Podcasts} />
                        <Route exact path="/browse/charts" component={Charts} />
                        <Route exact path="/browse/genres" component={Genres} />
                        <Route exact path="/browse/newreleases" component={NewReleases} />
                        <Route exact path="/browse/discover" component={Discover} />
                    </Switch>
                </section>
            </div>
        );
    }
}


export default Browse;
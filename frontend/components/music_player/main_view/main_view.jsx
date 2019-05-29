import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Browse
import Featured from './sub_views/browse/featured';

// Search
import Recent from './sub_views/search/recent';

// Collection
import Playlists from './sub_views/collection/playlists';

class MainView extends React.Component {
    render() {

        return (
            <div className="Root__main_view">
                <Switch>
                    <Route path="/browse" component={Featured} />
                    <Route path="/collection" component={Playlists} />
                    <Route path="/search" component={Recent} />
                </Switch>
            </div>
        )
    }
}


export default MainView;

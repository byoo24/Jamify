import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Browse
import Browse from './sub_views/browse/browse';

// Search
import Recent from './sub_views/search/recent';

// Collection
import Collection from './sub_views/collection/collection_container';

// Playlist
import Playlist from './sub_views/playlists/playlistShow';


class MainView extends React.Component {
    render() {

        return (
            <div className="Root__main_view">
                <Switch>
                    <Route path="/browse" component={Browse} />
                    <Route path="/collection" component={Collection} />
                    <Route path="/search" component={Recent} />
                    <Route path="/playlist/:playlistId" component={Playlist} />
                </Switch>
            </div>
        )
    }
}


export default MainView;

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Browse
import Browse from './browse/browse';

// Search
import Search from './search/search_container';

// Collection
import Collection from './collection/collection_container';

// Playlist
import Playlist from './playlists/playlistShow';

// Artist
import Artist from './artists/artistShow';

// Artist
import Album from './albums/albumShow';


class MainView extends React.Component {
    render() {



        return (
            <div className="Root__main_view">
                <Switch>
                    <Route path="/browse" component={Browse} />
                    <Route path="/collection" component={Collection} />
                    <Route path="/search" component={Search} />
                    <Route exact path="/playlist/:playlistId" component={Playlist} />
                    <Route exact path="/artist/:artistId" component={Artist} />
                    <Route exact path="/album/:albumId" component={Album} />
                </Switch>
            </div>
        )
    }
}


export default MainView;

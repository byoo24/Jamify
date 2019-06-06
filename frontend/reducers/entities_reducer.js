import { combineReducers } from 'redux';
import users from './session/users_reducer';
import playlists from './playlists/playlists_reducer';
import genres from './genres/genres_reducer';
import artists from './artists/artists_reducer';
import albums from './albums/albums_reducer';
import songs from './songs/songs_reducer';


const entitiesReducer = combineReducers({
    users,
    playlists,
    genres,
    artists,
    albums,
    songs
})

export default entitiesReducer;
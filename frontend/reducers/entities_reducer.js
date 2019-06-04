import { combineReducers } from 'redux';
import users from './session/users_reducer';
import playlists from './playlists/playlists_reducer';
import genres from './genres/genres_reducer';


const entitiesReducer = combineReducers({
    users,
    playlists,
    genres
})

export default entitiesReducer;
import { combineReducers } from 'redux';
import users from './session/users_reducer';
import playlists from './playlists/playlists_reducer';


const entitiesReducer = combineReducers({
    users,
    playlists
})

export default entitiesReducer;
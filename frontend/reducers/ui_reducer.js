import { combineReducers } from 'redux';
import modal from './playlists/modal_playlist_reducer';

const uiReducer = combineReducers({
    modal
})

export default uiReducer;
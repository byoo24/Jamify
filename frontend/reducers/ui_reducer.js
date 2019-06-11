import { combineReducers } from 'redux';
import modal from './playlists/modal_playlist_reducer';
import contextMenu from './ui/contextMenu_reducer';

const uiReducer = combineReducers({
    modal,
    contextMenu
})

export default uiReducer;
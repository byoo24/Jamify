import { combineReducers } from 'redux';
import modal from './ui/modal_playlist_reducer';
import contextMenu from './ui/contextMenu_reducer';
import songToBeAdded from './ui/song_to_playlist_reducer';

const uiReducer = combineReducers({
    modal,
    songToBeAdded
})

export default uiReducer;
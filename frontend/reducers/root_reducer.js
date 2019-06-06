import { combineReducers } from 'redux';

import entities from './entities_reducer';
import session from './session/session_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer';
import musicPlayer from './music_player/music_player_reducer';


export default combineReducers({
    entities,
    session,
    musicPlayer,
    errors,
    ui
});
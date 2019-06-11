import { combineReducers } from 'redux';

import entities from './entities_reducer';
import session from './session/session_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer';
import nowPlaying from './nowPlaying_reducer';


export default combineReducers({
    entities,
    session,
    nowPlaying,
    errors,
    ui
});
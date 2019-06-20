import { combineReducers } from 'redux';
import sessionErrorReducer from './session/session_errors_reducer';
import playlistMessagesReducer from './playlists/playlist_messages_reducer';


const errorsReducer = combineReducers({
    session: sessionErrorReducer,
    playlist: playlistMessagesReducer
});

export default errorsReducer;
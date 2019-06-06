import { combineReducers } from 'redux';
import currentSong from './current_song_reducer';
import controls from './music_control_reducer';


export default combineReducers({
    currentSong,
    controls
});
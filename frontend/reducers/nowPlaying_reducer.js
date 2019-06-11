import { combineReducers } from 'redux';

import currentSong from './queue/currentSong_reducer';
import queue from './queue/queue_reducer';
import playStatus from './queue/playStatus_reducer';


export default combineReducers({
    playStatus,
    currentSong,
    queue
});
import { 
    PLAY_CURRENT_SONG,
    PAUSE_CURRENT_SONG,
    SET_VOLUME
} from '../../actions/player_actions';
import { merge } from 'lodash';

const musicControlReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case PLAY_CURRENT_SONG:
            return merge({}, state, {playStatus: 'play'});
        case PAUSE_CURRENT_SONG:
            return merge({}, state, {playStatus: 'pause'});
        case SET_VOLUME:
            return merge({}, state, {volume: action.volume});
        default:
            return state;
    }
}

export default musicControlReducer;
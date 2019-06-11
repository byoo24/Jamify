import { 
    PLAY_CURRENT_SONG,
    PLAY_CURRENT_LIST
} from '../../actions/player_actions';

import { merge } from 'lodash';

const currentSongReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case PLAY_CURRENT_SONG:
            return merge({}, state, action.song);
        case PLAY_CURRENT_LIST:
            return merge({}, state, action.playlist[0]);
        default:
            return state;
    }
}


export default currentSongReducer;
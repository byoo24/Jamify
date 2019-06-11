import { RECEIVE_QUEUE } from '../../actions/player_actions';
import { PLAY_CURRENT_LIST } from '../../actions/player_actions';
import { merge } from 'lodash';

const queueReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case PLAY_CURRENT_LIST:
            return action.playlist;
        default:
            return state;
    }
}


export default queueReducer;
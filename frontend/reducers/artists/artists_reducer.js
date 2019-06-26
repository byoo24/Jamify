import { 
    RECEIVE_ARTIST, 
    RECEIVE_ARTISTS 
} from '../../actions/artist_actions';

import {
    RECEIVE_ALBUM
} from '../../actions/album_actions';


import {
    RECEIVE_SEARCH_RESULTS
} from '../../actions/search_actions';

import { merge } from 'lodash';


const artistReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_SEARCH_RESULTS:
        case RECEIVE_ARTISTS:
            return merge({}, state, action.artists);

        case RECEIVE_ARTIST:
        case RECEIVE_ALBUM:
            return merge({}, state, {[action.artist.id]: action.artist});

        default:
            return state;
    }
}



export default artistReducer;
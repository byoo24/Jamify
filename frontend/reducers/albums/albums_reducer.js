import { 
    RECEIVE_ALBUM, 
    RECEIVE_ALBUMS, 
} from '../../actions/album_actions';

import {
    RECEIVE_ARTIST
} from '../../actions/artist_actions';

import {
    RECEIVE_SEARCH_RESULTS
} from '../../actions/search_actions';

import { merge } from 'lodash';


const albumsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SEARCH_RESULTS:
        case RECEIVE_ALBUMS:
        case RECEIVE_ARTIST:
            return merge({}, state, action.albums);
        case RECEIVE_ALBUM:
            return merge({}, state, {[action.album.id]: action.album});
        default:
            return state;
    }
}


export default albumsReducer
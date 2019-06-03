import { RECEIVE_ALBUM, RECEIVE_ALBUMS_FROM_ARTIST } from '../../actions/album_actions';
import { merge } from 'lodash';


const albumsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALBUMS_FROM_ARTIST:
            return merge({}, state, action.albums);
        case RECEIVE_ALBUM:
            return merge({}, state, action.album);
        default:
            return state;
    }
}


export default albumsReducer
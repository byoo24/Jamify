import {
    RECEIVE_SONG,
    RECEIVE_SONGS_FROM_ALBUM
} from '../../actions/song_actions';

import {
    RECEIVE_ALBUM,
    RECEIVE_ALBUMS
} from '../../actions/album_actions';

import {
    RECEIVE_PLAYLIST,
    RECEIVE_PLAYLISTS
} from '../../actions/playlist_actions';

import { merge } from 'lodash';


const songsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALBUMS:
        case RECEIVE_ALBUM:
        case RECEIVE_PLAYLIST:
        case RECEIVE_PLAYLISTS:
            return merge({}, state, action.songs);
        default:
            return state;
    }
}


export default songsReducer;
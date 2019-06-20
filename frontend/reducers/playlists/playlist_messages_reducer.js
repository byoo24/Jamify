import { RECEIVE_PLAYLIST_MESSAGE, CLEAR_PLAYLIST_MESSAGE } from '../../actions/playlist_actions';


const playlistMessagesReducer = (state = [], action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_PLAYLIST_MESSAGE:
            return action.message;
        case CLEAR_PLAYLIST_MESSAGE:
            return [];
        default:
            return state;
    }
}



export default playlistMessagesReducer;
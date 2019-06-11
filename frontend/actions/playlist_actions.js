import * as PlaylistAPIUtil from '../util/playlist_api_util';
import * as PlaylistSongAPIUtil from '../util/playlist_songs_api_util';


export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const DELETE_PLAYLIST = "DELETE_PLAYLIST";


export const receivePlaylist = playlist => {
    return {
        type: RECEIVE_PLAYLIST,
        playlist
    }
}



export const receivePlaylists = playlists => {
    return {
        type: RECEIVE_PLAYLISTS,
        playlists
    }
};


export const deletePlaylist = playlistId => ({
    type: DELETE_PLAYLIST,
    playlistId
});






export const fetchPlaylist = (currentUserId, playlistId) => dispatch => (
    PlaylistAPIUtil.fetchPlaylist(currentUserId, playlistId).then(
        playlist => dispatch(receivePlaylist(playlist))
    )
);

// export const fetchPlaylist = (user_id, playlist_id) => dispatch => (
//     PlaylistAPIUtil.fetchPlaylist(user_id, playlist_id).then(
//         playlist => dispatch(receivePlaylist(playlist))
//     )
// );


export const fetchPlaylists = (currentUserId) => dispatch => (
    PlaylistAPIUtil.fetchPlaylists(currentUserId).then(
        playlists => dispatch(receivePlaylists(playlists))
    )
);

export const createPlaylist = (currentUserId, playlist) => {
    return dispatch => {
        return ( 
            PlaylistAPIUtil.createPlaylist(currentUserId, playlist).then(
                promise => {
                    return dispatch(receivePlaylist(promise))
                }
            )
        )
    }
}

// export const updatePlaylist = (user_id, playlist_id) => dispatch => (
//     PlaylistAPIUtil.updatePlaylist(user_id, playlist_id).then(
//         playlist => dispatch(receivePlaylist(playlist))
//     )
// );


// export const destroyPlaylist = (user_id, playlist_id) => dispatch => (
//     PlaylistAPIUtil.destroyPlaylist(user_id, playlist_id).then(
//         playlist_id => dispatch(delete_id(playlist_id))
//     )
// );



export const addSongToPlaylist = (playlistId, songId) => (
    PlaylistSongAPIUtil.addSongToPlaylist(playlistId, songId)
);
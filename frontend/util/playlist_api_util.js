


export const fetchPlaylist = playlistId => {
    const currentUserId = window.user.currentUser.id;

    return $.ajax({
        method: 'GET',
        url: `api/users/${currentUserId}/playlists/${playlistId}`
    });
}

export const fetchPlaylists = () => {
    const currentUserId = window.user.currentUser.id;

    return $.ajax({
        method: 'GET',
        url: `api/users/${currentUserId}/playlists`
    });
}


export const createPlaylist = playlist => {
    const currentUserId = window.user.currentUser.id;

    return(
        $.ajax({
            method: 'POST',
            url: `api/users/${currentUserId}/playlists`,
            data: { playlist }
        })
    );
};




// export const updatePlaylist = (user_id, id) => (
//     $.ajax({
//         method: 'PATCH',
//         url: `api/users/${user_id}/playlists/${id}`
//     })
// );


// export const destroyPlaylist = (user_id, id) => (
//     $.ajax({
//         method: 'DESTROY',
//         url: `api/users/${user_id}/playlists/${id}`
//     })
// );

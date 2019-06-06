


export const fetchPlaylist = (currentUserId, playlistId) => {
    // const currentUserId = window.user.currentUser.id;

    return $.ajax({
        method: 'GET',
        url: `api/users/${currentUserId}/playlists/${playlistId}`
    });
}

export const fetchPlaylists = (currentUserId) => {
    // const currentUserId = window.user.currentUser.id;

    return $.ajax({
        method: 'GET',
        url: `api/users/${currentUserId}/playlists`
    });
}


export const createPlaylist = (currentUserId, playlist) => {
    // const currentUserId = window.user.currentUser.id;

    return(
        $.ajax({
            method: 'POST',
            url: `api/users/${currentUserId}/playlists`,
            data: { playlist }
        })
    );
};



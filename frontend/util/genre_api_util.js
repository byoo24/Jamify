export const fetchPlaylists = () => {
    const currentUserId = window.user.currentUser.id;

    return $.ajax({
        method: 'GET',
        url: `api/users/${currentUserId}/playlists`
    });
};


export const fetchGenres = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/genres'
    });
};
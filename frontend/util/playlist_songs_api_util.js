export const addSongToPlaylist = (playlistId, songId) => (
    $.ajax({
        method: 'POST',
        url: `api/playlists/${playlistId}/songs/${songId}`
    })
);
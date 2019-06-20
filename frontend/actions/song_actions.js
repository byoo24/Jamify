import * as SongAPIUtil from '../util/song_api_util';

export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_SONGS_FROM_ALBUM = "RECEIVE_SONGS_FROM_ALBUM";
export const RECEIVE_SONG_ID = "RECEIVE_SONG_ID";
export const CLEAR_SONG_ID = "CLEAR_SONG_ID";



export const receiveSongId = songId => ({
    type: RECEIVE_SONG_ID,
    songId
});


export const clearSongId = () => ({
    type: CLEAR_SONG_ID
})



export const receiveSong = song => ({
    type: RECEIVE_SONG,
    song
});


export const receiveSongsFromAlbum = songs => ({
    type: RECEIVE_SONGS_FROM_ALBUM,
    songs
});



export const fetchSong = songId => dispatch => (
    SongAPIUtil.fetchSong(songId).then(
        song => dispatch(receiveSong(song))
    )
);


export const fetchSongsFromAlbum = albumId => dispatch => (
    SongAPIUtil.fetchSongsFromAlbum(albumId).then(
        songs => dispatch(receiveSongsFromAlbum(songs))
    )
);




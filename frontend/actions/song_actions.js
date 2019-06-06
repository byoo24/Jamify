import * as SongAPIUtil from '../util/song_api_util';

export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_SONGS_FROM_ALBUM = "RECEIVE_SONGS_FROM_ALBUM";

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
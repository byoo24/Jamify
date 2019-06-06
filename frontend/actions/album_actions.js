import * as AlbumAPIUtil from '../util/album_api_util';

export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUMS_FROM_ARTIST = 'RECEIVE_ALBUMS_FROM_ARTIST';

export const receiveAlbum = album => ({
    type: RECEIVE_ALBUM,
    album
});


export const receiveAlbums = albums => ({
    type: RECEIVE_ALBUMS,
    albums
})

export const receiveAlbumsFromArtist = albums => ({
    type: RECEIVE_ALBUMS_FROM_ARTIST,
    albums
});


export const fetchAlbum = id => dispatch => (
    AlbumAPIUtil.fetchAlbum(id).then(
        album => dispatch(receiveAlbum(album))
    )
);



export const fetchAlbums = () => dispatch => (
    AlbumAPIUtil.fetchAlbums().then(
        albums => dispatch(receiveAlbums(albums))
    )
);

export const fetchAlbumsFromArtist = artist_id => dispatch => (
    AlbumAPIUtil.fetchAlbumsFromArtist(artist_id).then(
        albums => dispatch(receiveAlbumsFromArtist(albums))
    )
);
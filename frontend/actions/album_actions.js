import * as AlbumAPIUtil from '../util/album_api_util';

export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUMS_FROM_ARTIST = 'RECEIVE_ALBUMS_FROM_ARTIST';

export const receiveAlbum = ({ album, artist, songs }) => ({
    type: RECEIVE_ALBUM,
    album,
    artist,
    songs
});


export const receiveAlbums = ({albums, songs}) => ({
    type: RECEIVE_ALBUMS,
    albums,
    songs
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
        payload => dispatch(receiveAlbums(payload))
    )
);

export const fetchAlbumsFromArtist = artist_id => dispatch => (
    AlbumAPIUtil.fetchAlbumsFromArtist(artist_id).then(
        albums => dispatch(receiveAlbumsFromArtist(albums))
    )
);
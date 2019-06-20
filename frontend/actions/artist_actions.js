import * as ArtistAPIUtil from '../util/artist_api_util';

export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";

export const receiveArtist = ({artist, albums}) => ({
    type: RECEIVE_ARTIST,
    artist,
    albums
});


export const receiveArtists = ({artists}) => ({
    type: RECEIVE_ARTISTS,
    artists
});



// export const fetchArtist = artist_id => dispatch => (
//     ArtistAPIUtil.fetchArtist(artist_id).then(
//         payload => dispatch(receiveArtist(payload))
//     )
// );

export const fetchArtist = artist_id => dispatch => {
    return ArtistAPIUtil.fetchArtist(artist_id).then(
        payload => {
            return dispatch(receiveArtist(payload))
        }
    )
}



export const fetchArtists = () => dispatch => (
    ArtistAPIUtil.fetchArtists().then(
        payload => dispatch(receiveArtists(payload))
    )
);
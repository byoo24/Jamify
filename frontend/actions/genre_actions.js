import * as GenreAPIUtil from '../util/genre_api_util';

export const RECEIVE_GENRES = 'RECEIVE_GENRES';


// Actions
export const receiveGenres = genres => ({
    type: RECEIVE_GENRES,
    genres
})




// Thunk Actions
export const fetchGenres = () => dispatch => (
    GenreAPIUtil.fetchGenres().then(
        genres => dispatch(receiveGenres(genres))
    )
);


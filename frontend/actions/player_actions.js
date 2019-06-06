export const PLAY_CURRENT_SONG = "PLAY_CURRENT_SONG";
export const PAUSE_CURRENT_SONG = "PAUSE_CURRENT_SONG";
export const SET_VOLUME = "SET_VOLUME";
export const MUTE_VOLUME = "MUTE_VOLUME";

export const playCurrentSong = current_song => ({
    type: PLAY_CURRENT_SONG,
    current_song
});


export const pauseCurrentSong = () => ({
    type: PAUSE_CURRENT_SONG
});


export const setVolume = volume => ({
    type: SET_VOLUME,
    volume
});


// export const muteVolume = () => ({
//     type: 
// })
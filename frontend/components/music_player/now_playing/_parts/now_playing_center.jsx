import React from 'react';

const convertTime = (timeStamp) => {
    let minutes = Math.floor(timeStamp / 60);
    let seconds = Math.floor(timeStamp - (minutes * 60));
    if (seconds < 10) { seconds = '0' + seconds; }
    return minutes + ':' + seconds;
}



export default ({ togglePlay, playStatus, currentTime, durationTime, setCurrentTime }) => {

    let playBtnClass = null;

    switch (playStatus) {
        case 'pause':
            playBtnClass = "player-btn player-icon circled player-icon-pause"
            break;
        default:
            playBtnClass = "player-btn player-icon circled player-icon-play"
    }

    let scrubberPercent = Math.floor((currentTime / durationTime) * 100);

    let scrubberStyle = {
        background: `linear-gradient( to right, #B3B3B3 ${scrubberPercent}%, #535353 ${scrubberPercent}%)`
    }

    return (
        <div className="now-playing-bar-center">
            <div className="player-controls">
                <div className="player-controls-buttons">
                    <button className="player-btn player-icon player-icon-shuffle" title="Enable Shuffle"></button>
                    <button className="player-btn player-icon player-icon-backward" title="Previous"></button>
                    <button className={playBtnClass} onClick={() => togglePlay()} title="Play"></button>
                    <button className="player-btn player-icon player-icon-forward" title="Next"></button>
                    <button className="player-btn player-icon player-icon-repeat" title="Enable repeat"></button>
                </div>
            </div>
            <div className="playback-bar">
                <div className="playback-bar-progress-time">{convertTime(currentTime)}</div>
                <div className="progress-bar">
                    <div className="progress-bar-wrapper" style={scrubberStyle}>
                        {/* <div className="progress-bar-empty"> */}
                        <input type="range" 
                                id="scrubber" 
                                name="scrubber" 
                                min="0" 
                                max="100" 
                                value={`${scrubberPercent || 0}`} 
                                onChange={setCurrentTime} 
                                className="progress-bar-input" 
                                />
                            {/* <div className="progress-bar-fill" style={scrubberClass}></div> */}
                        {/* </div> */}
                    </div>
                </div>
                <div className="playback-bar-progress-time">{convertTime(durationTime)}</div>
            </div>
        </div>
    );
}

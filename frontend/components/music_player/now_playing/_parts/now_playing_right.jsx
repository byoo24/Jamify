import React from 'react';


export default ({ volume, setVolume, volumeStatus, toggleMute }) => {

    let muteStyle;

    if (volumeStatus === 'mute') {
        muteStyle = ("player-btn player-icon player-icon-mute");
    } else {
        muteStyle = ( "player-btn player-icon player-icon-unmute" );
    }


    return (
        <div className="now-playing-bar-right">
            <div className="now-playing-bar-right-extra-controls">
                <div className="queue-list">
                    <button className="player-btn player-icon player-icon-queue" title="Queue"></button>
                </div>
                <div className="volume-bar">
                    <button className={muteStyle} onClick={toggleMute} aria-label="Mute"></button>
                    <div className="progress-bar">
                        <div className="progress-bar-wrapper">
                            <input type="range"
                                id="volume"
                                name="volume"
                                min="0"
                                max="1"
                                value={volume}
                                onChange={setVolume}
                                step="0.01"
                                className="progress-bar-input"
                            />
                            {/* <div className="progress-bar-empty">
                                <div className="progress-bar-fill"></div>
                            </div> */}
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    );
}

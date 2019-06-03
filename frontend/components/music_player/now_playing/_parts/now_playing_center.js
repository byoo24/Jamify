import React from 'react';


export default () => {

    return (
        <div className="now-playing-bar-center">
            <div className="player-controls">
                <div className="player-controls-buttons">
                    <button className="player-btn player-icon player-icon-shuffle" title="Enable Shuffle"></button>
                    <button className="player-btn player-icon player-icon-backward" title="Previous"></button>
                    <button className="player-btn player-icon player-icon-play circled" title="Pause"></button>
                    <button className="player-btn player-icon player-icon-forward" title="Next"></button>
                    <button className="player-btn player-icon player-icon-repeat" title="Enable repeat"></button>
                </div>
            </div>
            <div className="playback-bar">
                <div className="playback-bar-progress-time">0:00</div>
                <div className="progress-bar">
                    <div className="progress-bar-wrapper">
                        <div className="progress-bar-empty">
                            <div className="progress-bar-fill"></div>
                        </div>
                    </div>
                </div>
                <div className="playback-bar-progress-time">3:39</div>
            </div>
        </div>
    );
}

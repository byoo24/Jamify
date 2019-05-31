import React from 'react';


export default () => {

    return (
        <div className="now-playing-bar-center">
            <div className="player-controls">
                <div className="player-controls-buttons">
                    <button className="player-btn player-shuffle fas fa-random" title="Enable Shuffle"></button>
                    <button className="player-btn player-backward fas fa-step-backward" title="Previous"></button>
                    <button className="player-btn player-play far fa-play-circle" title="Pause"></button>
                    <button className="player-btn player-forward fas fa-step-forward" title="Next"></button>
                    <button className="player-btn player-repeat fas fa-redo-alt" title="Enable repeat"></button>
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

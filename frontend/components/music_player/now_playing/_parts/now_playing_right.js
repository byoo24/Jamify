import React from 'react';


export default () => {

    return (
        <div className="now-playing-bar-right">
            <div className="now-playing-bar-right-extra-controls">
                <div className="queue-list">
                    <button className="player-btn player-icon player-icon-queue" title="Queue"></button>
                </div>
                <div className="volume-bar">
                    <button className="player-btn player-icon player-icon-mute" aria-label="Mute"></button>
                    <div className="progress-bar">
                        <div className="progress-bar-wrapper">
                            <div className="progress-bar-empty">
                                <div className="progress-bar-fill"></div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    );
}

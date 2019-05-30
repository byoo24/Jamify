import React from 'react';
import { Link } from 'react-router-dom';
import AlbumThumbnail from '../_partials/albumThumbnail';

class NowPlaying extends React.Component {


    render() {

        return(
            <div className="Root__now-playing-bar">
                <footer className="now-playing-bar-container">
                    <div className="now-playing-bar">
                        <div className="now-playing-bar__left">
                            <div className="now-playing">
                                <Link to="/browse" className="now-playing-cover-art">
                                    <AlbumThumbnail />
                                </Link>
                            </div>
                        </div>
                        <div className="now-playing-bar__center"></div>
                        <div className="now-playing-bar__right"></div>
                        <audio id="now-playing-player">
                            
                        </audio>

                        {/* <div>
                            <button onClick = "document.getElementById('now-playing-player').play()">Play</button>
                            <button onClick = "document.getElementById('now-playing-player').pause()">Pause</button>
                            <button onClick = "document.getElementById('now-playing-player').volume += 0.2">Vol+</button>
                            <button onClick = "document.getElementById('now-playing-player').volume -= 0.2">Vol-</button>
                        </div> */}
                    </div>
                </footer>
            </div>
        )
    }
}

export default NowPlaying;
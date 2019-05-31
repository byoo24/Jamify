import React from 'react';
import { Link } from 'react-router-dom';
import AlbumThumbnail from '../_partials/albumThumbnail';

import NowPlayingLeft from './_parts/now_playing_left';
import NowPlayingCenter from './_parts/now_playing_center';
import NowPlayingRight from './_parts/now_playing_right';
class NowPlaying extends React.Component {


    render() {

        return(
            <div className="Root__now-playing-bar">
                <footer className="now-playing-bar-container">
                    <div className="now-playing-bar">
                        <NowPlayingLeft />
                        <NowPlayingCenter />
                        <NowPlayingRight />
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
import React from 'react';
import { withRouter } from 'react-router-dom';
// import AlbumThumbnail from '../_partials/albumThumbnail';

import NowPlayingLeft from './_parts/now_playing_left';
import NowPlayingCenter from './_parts/now_playing_center.jsx';
import NowPlayingRight from './_parts/now_playing_right';
import { connect } from 'react-redux';

import { fetchAlbum } from '../../../actions/album_actions';
import { fetchArtist } from '../../../actions/artist_actions';
import { setVolume, playCurrentSong, pauseCurrentSong } from '../../../actions/player_actions';


class NowPlaying extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            playStatus: 'play',
            currentTime: 0,
            durationTime: 0,
            album_image: "",
            artist_name: "",
            volumeStatus: "unmute",
            volume: 0.5,
            prevVolume: 0.5
        }

        this.controls = React.createRef();

        this.playAudio = this.playAudio.bind(this);

        this.togglePlay = this.togglePlay.bind(this);
        this.updateTime = this.updateTime.bind(this);
        this.setCurrentTime = this.setCurrentTime.bind(this);
        this.setVolume = this.setVolume.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentSong.id !== this.props.currentSong.id) {
            let audio = this.controls.current;

            audio.onloadedmetadata = function () {
                this.setState({ durationTime: audio.duration });
            }.bind(this);

            const that = this;

            this.props.fetchAlbum(this.props.currentSong.album_id).then(
                (albumObj) => {
                    let { album } = albumObj;

                    that.setState({ album_image: album.cover_image});
                    that.props.fetchArtist(album.artist_id).then(
                        (artistObj) => {
                            let {artist} = artistObj;
                            that.setState({ artist_name: artist.name })
                        }
                    )
                }
            );
            this.playAudio();
        }
    }



    updateTime(timestamp) {
        timestamp = Math.floor(timestamp);
        this.setState({ currentTime: timestamp });
    }


    setCurrentTime(e) {
        let audio = this.controls.current;
        // let stringTime = e.target + '%';
        let newTime = Number(e.target.value) / 100 * this.state.durationTime;
        console.log(newTime);

        this.setState({ currentTime: newTime })
        audio.currentTime = newTime;
    }

    setVolume(e) {
        let audio = this.controls.current;
        let newVolume = Number(e.target.value);
        this.setState({ volumeStatus: 'unmute' })
        this.setState({ volume: newVolume });
        audio.volume = newVolume;
    }

    toggleMute() {
        let audio = this.controls.current;
        let prevVol = this.state.prevVolume;
        let currentVol = this.state.volume;
        
        if (this.state.volumeStatus === 'unmute') {
            let status = 'mute';
            this.setState({ volumeStatus: status });
            this.setState({ prevVolume: currentVol })
            this.setState({ volume: 0 });
            audio.volume = 0;
        } else {
            let status = 'unmute';
            this.setState({ volumeStatus: status });
            this.setState({ volume: prevVol });
            audio.volume = prevVol;
        }
        
        
    }

    togglePlay() {
        let status = this.state.playStatus;
        let audio = this.controls.current;
        if (!this.props.currentSong) {
            status = 'play';
            this.setState({ playStatus: status });
            return;
        }

        if(status === 'play') {
            status = 'pause';
            
            this.playAudio();

        } else {
            status = 'play';
            audio.pause();
        }
    
        this.setState({ playStatus: status });
    }


    playAudio() {
        let audio = this.controls.current;
        let status = 'pause';

        audio.play();
        let that = this;

        setInterval(function () {
            let currentTime = audio.currentTime;
            let duration = that.state.durationTime;

            that.updateTime(currentTime);
        }, 100);

        this.setState({ playStatus: status });
    }

    render() {

        const { currentSong } = this.props;
        const { audio_url } = currentSong;

        // let durationTime = this.convertTime(this.state.durationTime);
        // let currentTime = this.convertTime(this.state.currentTime);

        
        return(
            <div className="Root__now-playing-bar">
                <footer className="now-playing-bar-container">
                    <div className="now-playing-bar">
                        <NowPlayingLeft 
                            title={currentSong.title}
                            artist_name={this.state.artist_name}
                            album_image={this.state.album_image} />

                        <NowPlayingCenter 
                            togglePlay={this.togglePlay} 
                            playStatus={this.state.playStatus}
                            durationTime={this.state.durationTime}
                            currentTime={this.state.currentTime}
                            scrubberPercent={this.state.scrubberPercent}
                            setCurrentTime={this.setCurrentTime} />

                        <NowPlayingRight 
                            volume={this.state.volume}
                            setVolume={this.setVolume} 
                            toggleMute={this.toggleMute} 
                            volumeStatus={this.state.volumeStatus} />



                        <audio id="now-playing-player" ref={this.controls} preload="metadata" src={audio_url}>
                            
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







const msp = (state) => ({
    currentSong: state.musicPlayer.currentSong,
    playStatus: state.musicPlayer.controls.playStatus,
    volume: state.musicPlayer.controls.volume
});


const mdp = (dispatch) => ({
    setVolume: (volume) => dispatch(setVolume(volume)),
    fetchAlbum: albumId => dispatch(fetchAlbum(albumId)),
    fetchArtist: artistId => dispatch(fetchArtist(artistId))
})


export default withRouter(connect(msp, mdp)(NowPlaying));

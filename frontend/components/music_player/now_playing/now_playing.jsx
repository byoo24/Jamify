import React from 'react';
import { withRouter } from 'react-router-dom';

import NowPlayingLeft from './_parts/now_playing_left';
import NowPlayingCenter from './_parts/now_playing_center.jsx';
import NowPlayingRight from './_parts/now_playing_right';
import { connect } from 'react-redux';

import { fetchAlbum } from '../../../actions/album_actions';
import { fetchArtist } from '../../../actions/artist_actions';
import { setVolume, playCurrentSong, pauseCurrentSong } from '../../../actions/player_actions';
import { nextSong, previousSong } from '../../../actions/queue_actions';


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
            prevVolume: 0.5,
            queueIndex: 0
        }
        
        this.controls = React.createRef();

        this.playAudio = this.playAudio.bind(this);

        this.togglePlay = this.togglePlay.bind(this);
        this.updateTime = this.updateTime.bind(this);
        this.setCurrentTime = this.setCurrentTime.bind(this);
        this.setVolume = this.setVolume.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
        this.playNext = this.playNext.bind(this);
        this.playPrevious = this.playPrevious.bind(this);
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
        console.log(newVolume);
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

    playNext() {
        if (this.state.queueIndex === this.props.queue.length - 1) {
            return;
        }

        let newIndex = this.state.queueIndex + 1;
        
        this.setState({ queueIndex: newIndex });
        this.props.playCurrentSong(this.props.queue[newIndex]);
    }

    playPrevious() {
        if (this.state.queueIndex === 0) {
            return;
        }

        let newIndex = this.state.queueIndex - 1;
        this.setState({ queueIndex: newIndex });
        this.props.playCurrentSong(this.props.queue[newIndex]);
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
                            setCurrentTime={this.setCurrentTime}
                            playNext={this.playNext}
                            playPrevious={this.playPrevious} />

                        <NowPlayingRight 
                            volume={this.state.volume}
                            setVolume={this.setVolume} 
                            toggleMute={this.toggleMute} 
                            volumeStatus={this.state.volumeStatus} />



                        <audio id="now-playing-player" ref={this.controls} preload="metadata" src={audio_url}>
                            
                        </audio>

                    </div>
                </footer>
            </div>
        )
    }
}







const msp = (state) => {
    
    return{
        currentSong: state.musicPlayer.currentSong,
        playStatus: state.musicPlayer.controls.playStatus,
        volume: state.musicPlayer.controls.volume,
        queue: state.musicPlayer.queue,
        queueIndex: 0

    }
};


const mdp = (dispatch) => ({
    setVolume: (volume) => dispatch(setVolume(volume)),
    fetchAlbum: albumId => dispatch(fetchAlbum(albumId)),
    fetchArtist: artistId => dispatch(fetchArtist(artistId)),
    playCurrentSong: song => dispatch(playCurrentSong(song)),
    nextSong: num => dispatch(nextSong(num)),
    previousSong: num => dispatch(previousSong(num))

})


export default withRouter(connect(msp, mdp)(NowPlaying));

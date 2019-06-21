import React from 'react';
import { withRouter } from 'react-router-dom';

import NowPlayingLeft from './_parts/now_playing_left';
import NowPlayingCenter from './_parts/now_playing_center.jsx';
import NowPlayingRight from './_parts/now_playing_right';
import { connect } from 'react-redux';

import { updatePlayStatus } from '../../../actions/player_actions';
import { fetchAlbum } from '../../../actions/album_actions';
import { fetchArtist } from '../../../actions/artist_actions';
import { setVolume, playCurrentSong, pauseCurrentSong } from '../../../actions/player_actions';
import { nextSong, previousSong } from '../../../actions/queue_actions';

import { isEmpty } from 'lodash';


class NowPlaying extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            playStatus: 'play',
            currentTime: 0,
            durationTime: 0,
            queueIndex: 0,

            volumeStatus: "unmute",
            volume: 0.5,
            prevVolume: 0.5,
        }
        
        this.controls = React.createRef();

        this.playAudio = this.playAudio.bind(this);

        this.togglePlay = this.togglePlay.bind(this);
        this.setCurrentTime = this.setCurrentTime.bind(this);
        this.updateTime = this.updateTime.bind(this);
        this.playNext = this.playNext.bind(this);
        this.playPrevious = this.playPrevious.bind(this);

        this.setVolume = this.setVolume.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
    }

    componentDidUpdate(prevProps) {

        if (prevProps.currentSong.id !== this.props.currentSong.id) {
            const { currentArtist, currentAlbum } = this.props;

            let audio = this.controls.current;

            // this.setState({
            //     artist_name: currentArtist.name
            // });

            // this.setState({
            //     album_image: currentAlbum.cover_image
            // });

            audio.onloadedmetadata = function () {
                this.setState({ durationTime: audio.duration });
            }.bind(this);



            this.playAudio();
        }

    //     if (prevProps.currentSong.id !== this.props.currentSong.id) {
    //         let audio = this.controls.current;

    //         audio.onloadedmetadata = function () {
    //             this.setState({ durationTime: audio.duration });
    //         }.bind(this);

    //         const that = this;

    //         this.props.fetchAlbum(this.props.currentSong.album_id).then(
    //             (albumObj) => {
    //                 let { album } = albumObj;

    //                 that.setState({ album_image: album.cover_image});
    //                 that.props.fetchArtist(album.artist_id).then(
    //                     (artistObj) => {
    //                         let {artist} = artistObj;
    //                         that.setState({ artist_name: artist.name })
    //                     }
    //                 )
    //             }
    //         );
    //         this.playAudio();
    //     }
    }


    // CENTER CONTROLS
    // ====================
    updateTime(timestamp) {
        timestamp = Math.floor(timestamp);
        this.setState({ currentTime: timestamp });
    }


    setCurrentTime(e) {
        let audio = this.controls.current;
        let newTime = Number(e.target.value) / 100 * this.state.durationTime;

        this.setState({ currentTime: newTime })
        audio.currentTime = newTime;
    }


    togglePlay() {
        let status = this.state.playStatus;
        let audio = this.controls.current;

        if (!this.props.currentSong) {
            status = 'play';
            this.setState({ playStatus: status });
            return;
        }

        if (status === 'play') {
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

    // ====================


    // RIGHT CONTROLS
    // =====================

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

    // =====================
    

    




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
        
        const { currentSong, 
                currentArtist, 
                currentAlbum 
            } = this.props;

        const {audio_url} = currentSong;
        const artistName = currentArtist ? currentArtist.name : null;
        const albumImg = currentAlbum ? currentAlbum.cover_image : null;

        return(
            <div className="Root__now-playing-bar">
                <footer className="now-playing-bar-container">
                    <div className="now-playing-bar">
                        <NowPlayingLeft
                            title={currentSong.title}
                            artist_name={artistName}
                            album_image={albumImg} />

                        <NowPlayingCenter 
                            togglePlay={this.togglePlay}
                            playStatus={this.state.playStatus}
                            currentTime={this.state.currentTime}
                            durationTime={this.state.durationTime}
                            setCurrentTime={this.setCurrentTime}
                            playNext={this.playNext}
                            playPrevious={this.playPrevious} />
                        
                        <NowPlayingRight 
                            volume={this.state.volume}
                            volumeStatus={this.state.volumeStatus}
                            setVolume={this.setVolume}
                            toggleMute={this.toggleMute} />

                        {/* <NowPlayingLeft 
                            title={currentSong.title}
                            artist_name={this.state.artist_name}
                            album_image={this.state.album_image} /> */}

                            
                        <audio id="now-playing-player" 
                                ref={this.controls} 
                                preload="metadata" 
                                src={audio_url}>
                            
                        </audio>

                    </div>
                </footer>
            </div>
        )
    }
}






const msp = (state) => {
    let playlist = null;
    let currentSong = state.nowPlaying.currentSong;
    let currentArtist = null;
    let currentAlbum = null;
    // const queueIds = state.nowPlaying.queueIds;
    // const currentSongId = state.nowPlaying.currentSongId;

    if (currentSong) {
        currentArtist = state.entities.artists[currentSong.artist_id];
        currentAlbum = state.entities.albums[currentSong.album_id];
    }

    
    // if ( !isEmpty(state.entities.songs) ) {
    //     const songs = Object.values(state.entities.songs);
    //     playlist = songs.filter((song) => queueIds.includes(song.id));
    //     currentSong = state.entities.songs[currentSongId];

    //     if (currentSong) {
    //         currentArtist = state.entities.artists[currentSong.artist_id];
    //         currentAlbum = state.entities.albums[currentSong.album_id];
    //     }
    // }

    return{
        currentSong,
        currentArtist,
        currentAlbum,
        queue: state.nowPlaying.queue,
        playStatus: state.nowPlaying.playStatus,
    }
};


const mdp = (dispatch) => ({
    // setVolume: (volume) => dispatch(setVolume(volume)),
    // fetchAlbum: albumId => dispatch(fetchAlbum(albumId)),
    // fetchArtist: artistId => dispatch(fetchArtist(artistId)),
    playCurrentSong: songId => dispatch(playCurrentSong(songId)),
    updatePlayStatus: status => dispatch(updatePlayStatus(status))
    // nextSong: num => dispatch(nextSong(num)),
    // previousSong: num => dispatch(previousSong(num))

})


export default connect(msp, mdp)(NowPlaying);

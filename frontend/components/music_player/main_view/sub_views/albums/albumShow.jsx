import React from 'react';
import { connect } from 'react-redux';
import { fetchAlbum } from '../../../../../actions/album_actions';
import { fetchSongsFromAlbum } from  '../../../../../actions/song_actions';
import { playCurrentSong } from '../../../../../actions/player_actions';
import { withRouter, Link } from 'react-router-dom';

class AlbumShow extends React.Component {

    constructor(props){
        super(props);
        // this.playThisSong = this.playThisSong.bind(this);
    }

    componentDidMount() {
        this.props.fetchAlbum(this.props.match.params.albumId);
        this.props.fetchSongsFromAlbum(this.props.match.params.albumId);
        this.changeBg("blue-gradient");
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.albumId !== this.props.match.params.albumId) {
            this.props.fetchAlbum(this.props.match.params.albumId);
            this.props.fetchSongsFromAlbum(this.props.match.params.albumId);
        }
    }

    changeBg(classBg) {
        const bg = document.getElementById('bg-gradient');
        bg.className = '';

        if (classBg) {
            bg.classList.add(classBg);
        }
    }

    // playThisSong(song) {
    //     return this.props.playCurrentSong(song);
    // }


    render() {
        const { album, songs } = this.props;
        let albumTitle = null, coverImg = null, songsList = null; 
        let albumId = this.props.match.params.albumId;

        if (album) {
            albumTitle = album.title;
            coverImg = album.cover_image;
        }

        let filteredSongs = songs.filter(song => song.album_id == albumId);
        

        if (album && songs) {
            songsList = filteredSongs.map((song) => {
                return (
                    <li key={song.id} onClick={() => this.props.playCurrentSong(song)}>
                        <span className="song-left">
                            <i className="player-icon player-icon-play"></i>

                            <span className="song-title">
                                {song.title}
                            </span>
                        </span>
                    </li>
                )
            })
        }

        return (
            <div className="album-show">
                <div className="album-show-container">
                    <div className="album-info">
                        <img src={coverImg} alt="" />
                        <h1>{albumTitle}</h1>
                    </div>

                    <div className="music-playlist">
                        <ol className="music-playlist-container">
                            {songsList}
                        </ol>

                    </div>

                </div>
            </div>
        )
    }
}


const msp = (state, ownProps) => ({
    album: state.entities.albums[ownProps.match.params.albumId],
    songs: Object.values(state.entities.songs)
});

const mdp = (dispatch) => ({
    fetchAlbum: albumId => dispatch(fetchAlbum(albumId)),
    fetchSongsFromAlbum: albumId => dispatch(fetchSongsFromAlbum(albumId)),
    playCurrentSong: current_song => dispatch(playCurrentSong(current_song))
});


export default withRouter(connect(msp, mdp)(AlbumShow));
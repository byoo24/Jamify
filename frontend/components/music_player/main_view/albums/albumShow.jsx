import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Track from '../track';

import { fetchAlbum } from '../../../../actions/album_actions';
import { playCurrentSong } from '../../../../actions/player_actions';

import Media from '../media';

class AlbumShow extends React.Component {

    constructor(props){
        super(props);
        this.playAlbum = this.playAlbum.bind(this);
        // this.playThisSong = this.playThisSong.bind(this);
    }

    componentDidMount() {
        this.props.fetchAlbum(this.props.match.params.albumId);
        this.changeBg("blue-gradient");
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.albumId !== this.props.match.params.albumId) {
            this.props.fetchAlbum(this.props.match.params.albumId);
        }
    }

    changeBg(classBg) {
        const bg = document.getElementById('bg-gradient');
        bg.className = '';

        if (classBg) {
            bg.classList.add(classBg);
        }
    }

    playAlbum() {
        
        const albumId = this.props.match.params.albumId;
        let songList;
        const that = this;

        if (this.props.songs instanceof Object) {
            songList = Object.values(this.props.songs);
        } else {
            songList = this.props.songs;
        }

        const stuff = songList.filter((song) => (
            song.album_id == that.props.match.params.albumId
        ));
        this.props.receiveSongList(stuff);
    }
    // playThisSong(song) {
    //     return this.props.playCurrentSong(song);
    // }


    render() {
        const { album, artist, songs } = this.props;

        // if (album) {
        //     albumTitle = album.title;
            
        //     coverImg = album.cover_image;
        // }

        
        
        const albumTitle = album ? album.title : null;
        const coverImg = album ? album.cover_image : null;
        const artistName = artist ? artist.name : null;

        const songList = songs ? (
            songs.map((song) => (
                <li key={song.id}>
                    <Track 
                        song={song}
                    />
                </li>)
            )
        ) : null

    

        return (
            <div className="playlist-show">
                <div className="playlist-show-container">
                    <div className="playlist-info">
                        <Media 
                            media={album}
                            icon='album'
                            user={artist}
                            size="large"
                            view="show"
                        />
                        <button onClick={this.playAlbum} className="btn btn-green" style={{display: "block", marginLeft: "auto", marginRight: "auto"}}>PLAY</button>
                    </div>

                    <div className="music-playlist">
                        <ol className="music-playlist-container">
                            {songList}
                        </ol>
                    </div>

                </div>
            </div>
        )
    }
}


const msp = (state, ownProps) => {
    const album = state.entities.albums[ownProps.match.params.albumId];
    let songs, artist;
    
    
    if (album) {
        // songs = Object.keys(state.entities.songs).map(key => state.entities.songs[key]);
        songs = [...album.songIds] = Object.values(state.entities.songs);
        artist = state.entities.artists[album.artist_id];
    }
    
    
    return {
        album,
        artist,
        songs
    }
}



const mdp = (dispatch) => ({
    fetchAlbum: albumId => dispatch(fetchAlbum(albumId)),
    // fetchSongsFromAlbum: albumId => dispatch(fetchSongsFromAlbum(albumId)),
    playCurrentSong: current_song => dispatch(playCurrentSong(current_song)),
    // receiveSongList: songs => dispatch(receiveSongList(songs))
});


export default withRouter(connect(msp, mdp)(AlbumShow));
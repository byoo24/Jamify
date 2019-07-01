import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Track from '../track';

import { fetchAlbum } from '../../../../actions/album_actions';
import { playCurrentList } from '../../../../actions/player_actions';

import { openContextMenu } from '../../../../actions/contextMenu_actions';

import { receiveSongId } from '../../../../actions/song_actions';

import { openModal } from '../../../../actions/modal_action';

import Media from '../media';

class AlbumShow extends React.Component {

    constructor(props){
        super(props);
        this.moreMenu = React.createRef();
        this.state = {
            contextMenuStatus: "",
            contextSongId: ""
        }
        // this.playThisSong = this.playThisSong.bind(this);
        this.playThisPlaylist = this.playThisPlaylist.bind(this);
        this.showContextMenu = this.showContextMenu.bind(this);
        this.closeContextMenu = this.closeContextMenu.bind(this);
        this.addSongToPlaylist = this.addSongToPlaylist.bind(this);
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

    showContextMenu(songId) {
        return e => {
            e.preventDefault();
            this.setState({ contextSongId: songId });
            let menu = this.moreMenu.current;
            menu.style.display = 'block';            
            menu.style.left = e.clientX + 'px';
            menu.style.top = e.clientY + 'px';
        }
    }


    closeContextMenu(e) {
        e.stopPropagation();
        let menu = this.moreMenu.current;
        if (!e.target.classList.contains('more-menu')) {
            this.setState({ contextSongId: "" });
            menu.style.display = 'none';
        }
    }




    addSongToPlaylist() {
        
        this.props.addContextSongId(this.state.contextSongId);
        this.props.openModal();
    }
    
    playThisPlaylist() {
        const { songs } = this.props;
        if (songs.length > 0) {
            this.props.playCurrentList(songs);
        }
    }



    render() {
        const { album, artist, songs, contextMenu, cover_image } = this.props;
        const songIds = album ? album.songIds : [];
        
        const songList = songs ? (
            songs.map((song) => (
                <li key={song.id}>
                    <Track 
                        song={song}
                        showContextMenu={this.showContextMenu}
                        closeContextMenu={this.closeContextMenu}
                    />
                </li>)
            )
        ) : null

        
        const thumbnail_url = album ? album.cover_image : null;
    

        return (


            <div className="playlist-show" onClick={this.closeContextMenu}>
                <div className="playlist-show-container">
                    <div className="playlist-info">
                        <Media 
                            media={album}
                            type='album'
                            user={artist}
                            size="large"
                            view="show"
                            songIds={songIds}
                            thumbnail_url={thumbnail_url}
                            path={`/album/${this.props.match.params.albumId}`}
                        />
                        <button onClick={this.playThisPlaylist} className="btn btn-green" style={{display: "block", marginLeft: "auto", marginRight: "auto"}}>PLAY</button>
                    </div>

                    <div className="music-playlist">
                        <ol className="music-playlist-container">
                            {songList}
                        </ol>
                    </div>

                </div>

                <div className="context-menu"
                    ref={this.moreMenu}>
                    <ul className="context-menu-wrap">
                        <li className="context-menu-title">Song Options</li>
                        <li className="context-menu-item" onClick={this.addSongToPlaylist}>
                            <span className="subContext-title">Add to Playlist</span>
                            <ul className="subContext-menu">

                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}


const msp = (state, ownProps) => {
    const album = state.entities.albums[ownProps.match.params.albumId];
    let artist = null, songs = null;    
    
    if (album) {
        // songs = Object.keys(state.entities.songs).map(key => state.entities.songs[key]);
        const music = Object.values(state.entities.songs);
        // debugger
        artist = state.entities.artists[album.artist_id];
        let songIds = album.songIds ? album.songIds : [];
        
        songs = music.filter(song => songIds.includes(song.id))
    }

    
    return {
        album,
        artist,
        songs
    }
}




const mdp = (dispatch) => ({
    openModal: () => dispatch(openModal('addSong')),

    fetchAlbum: albumId => dispatch(fetchAlbum(albumId)),
    playCurrentList: playlist => dispatch(playCurrentList(playlist)),
    addContextSongId: songId => dispatch(receiveSongId(songId))
});


export default withRouter(connect(msp, mdp)(AlbumShow));
import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Track from '../track';

import { fetchAlbum } from '../../../../actions/album_actions';
import { playCurrentList } from '../../../../actions/player_actions';

import { openContextMenu } from '../../../../actions/contextMenu_actions';

import { openModal } from '../../../../actions/modal_action';

import Media from '../media';

class AlbumShow extends React.Component {

    constructor(props){
        super(props);
        this.moreMenu = React.createRef();

        // this.playThisSong = this.playThisSong.bind(this);
        // this.playThisPlaylist = this.playThisPlaylist.bind(this);
        this.showContextMenu = this.showContextMenu.bind(this);
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
        debugger
        return e => {
            e.preventDefault();
            let menu = this.moreMenu.current;
            this.props.openContextMenu('track');
            debugger
            menu.style.left = e.clientX + 'px';
            menu.style.top = e.clientY + 'px';
        }
    }
    
    // playThisSong(song) {
    //     return this.props.playCurrentSong(song);
    // }



    render() {
        const { album, artist, songs, contextMenu } = this.props;
        
        const songList = songs ? (
            songs.map((song) => (
                <li key={song.id}>
                    <Track 
                        song={song}
                        action={this.showContextMenu}
                    />
                </li>)
            )
        ) : null

        
        const contextMenuStyle = contextMenu == 'track' ? ({
            display: 'block'
        }) : ({
            display: 'none'
        })
    

        return (


            <div className="playlist-show">
                <div className="playlist-show-container">
                    <div className="playlist-info">
                        <Media 
                            media={album}
                            type='album'
                            user={artist}
                            size="large"
                            view="show"
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
                    ref={this.moreMenu}
                    style={contextMenuStyle}>
                    <ul className="context-menu-wrap">
                        <li className="context-menu-title">Song Options</li>
                        <li className="context-menu-item" onClick={this.props.openModal}>Add to Playlist</li>
                    </ul>
                </div>
            </div>
        )
    }
}


const msp = (state, ownProps) => {
    const album = state.entities.albums[ownProps.match.params.albumId];
    let songs, artist;
    const contextMenu = state.ui.contextMenu
    
    
    if (album) {
        // songs = Object.keys(state.entities.songs).map(key => state.entities.songs[key]);
        songs = Object.values(state.entities.songs);
        artist = state.entities.artists[album.artist_id];
    }

    
    return {
        album,
        artist,
        songs,
        contextMenu
    }
}




const mdp = (dispatch) => ({
    openContextMenu: context => dispatch(openContextMenu(context)),
    openModal: () => dispatch(openModal('addSong')),

    fetchAlbum: albumId => dispatch(fetchAlbum(albumId)),
    // fetchSongsFromAlbum: albumId => dispatch(fetchSongsFromAlbum(albumId)),
    playCurrentSong: songId => dispatch(playCurrentSong(songId)),
    // receiveSongList: songs => dispatch(receiveSongList(songs)),
    playCurrentList: playlist => dispatch(playCurrentList(playlist))
});


export default withRouter(connect(msp, mdp)(AlbumShow));
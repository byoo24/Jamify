import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPlaylist } from '../../../../actions/playlist_actions';
import EmptyState from '../empty_state';

import Track from '../track';
import Media from '../media';

import { receiveSongId } from '../../../../actions/song_actions';
import { playCurrentList } from '../../../../actions/player_actions';
import { openModal } from '../../../../actions/modal_action';




class PlaylistShow extends React.Component {
    
    constructor(props) {
        super(props);
        this.moreMenu = React.createRef();

        this.closeContextMenu = this.closeContextMenu.bind(this);
        this.showContextMenu = this.showContextMenu.bind(this);
        this.playThisPlaylist = this.playThisPlaylist.bind(this);
        this.addSongToPlaylist = this.addSongToPlaylist.bind(this);

    }

    componentDidMount() {
        const currentUserId = this.props.currentUserId;
        const playlistId = this.props.match.params.playlistId;
        this.props.fetchPlaylist(currentUserId, playlistId);
        this.changeBg("burgundy-gradient");
    }


    playThisPlaylist() {
        const { songs } = this.props;
        if (songs.length > 0) {
            this.props.playCurrentList(songs);
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
        this.state = {
            contextMenuStatus: "",
            contextSongId: ""
        }
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


    changeBg(classBg) {
        const bg = document.getElementById('bg-gradient');
        bg.className = '';

        if (classBg) {
            bg.classList.add(classBg);
        }
    }

    render() {
        const { playlist, songs } = this.props;
        const songIds = playlist ? playlist.songIds : null;
        const title = playlist ? playlist.name : null;


        const songList = songs ? (
            songs.map((song) => (
                <li key={Math.floor(Math.random() * Math.floor(10000))}>
                    <Track
                        song={song}
                        showContextMenu={this.showContextMenu}
                        closeContextMenu={this.closeContextMenu}
                    />
                </li>)
            )
        ) : (
            <EmptyState
                title={"It looks a bit empty here."}
                subtitle={"Browse and find music you love."}
                iconType="astronaut"
            />
        )

        
        return(
            <div className="playlist-show" onClick={this.closeContextMenu}>
                <div className="playlist-show-container">
                    <div className="playlist-info">
                        <Media 
                            media={playlist}
                            type='playlist'
                            size='large'
                            view='show'
                            songIds={songIds}
                        />
                        <button onClick={this.playThisPlaylist} className="btn btn-green" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}>PLAY</button>
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
    const playlistId = ownProps.match.params.playlistId;
    const playlist = state.entities.playlists[playlistId];
    const songIds = playlist ? playlist.songIds : null;

    const music = Object.values(state.entities.songs);

    let songs = music.length > 0 ? (
        music.filter(song => songIds.includes(song.id))
    ) : ( null );



    // if (playlist !== undefined && state.entities.songs !== undefined) {
    //     for (let i = 0; i < playlist.songIds.length; i++) {
    //         let id = playlist.songIds[i];
    //         songs.push(state.entities.songs[id]);
    //     }
    // }

    return {
        playlist,
        currentUserId: state.session.currentUser.id,
        songs
    }
}


const mdp = dispatch => {
    return {
        openModal: () => dispatch(openModal('addSong')),
        fetchPlaylist: (currentUserId, playlistId) => dispatch(fetchPlaylist(currentUserId, playlistId)),
        playCurrentList: playlist => dispatch(playCurrentList(playlist)),
        addContextSongId: songId => dispatch(receiveSongId(songId))
    }
}


export default withRouter(connect(msp, mdp)(PlaylistShow));
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPlaylists, deletePlaylist } from '../../../../actions/playlist_actions';
import PlaylistIndexItem from './_playlistIndexItem';

import EmptyState from '../empty_state';
import Media from '../media';

class PlaylistIndex extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            toBeDeletedId: ""
        }
        this.moreMenu = React.createRef();

        this.showContextMenu = this.showContextMenu.bind(this);
        this.closeContextMenu = this.closeContextMenu.bind(this);
        this.removePlaylist = this.removePlaylist.bind(this);
    }

    componentDidMount() {
        const currentUserId = this.props.currentUserId;
        this.props.changeBg('red-gradient');
        this.props.fetchPlaylists(currentUserId);
    }

    removePlaylist() {
        const { currentUserId } = this.props;
        const toBeDeletedId = this.state.toBeDeletedId;
        
        this.props.deletePlaylist(currentUserId, toBeDeletedId);
    }

    showContextMenu(playlistId) {
        
        return e => {
            e.preventDefault();
            this.setState({ toBeDeletedId: playlistId });
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

    render() {
        const { playlists, songIds } = this.props;

        const playlistList = (playlists.length < 1) ? (
            <EmptyState
                title={"Your playlists will appear here."}
                subtitle={"Save your favorite songs in a new playlist."}
                iconType="playlist"
            />
        ) : (
            playlists.map((playlist) => {
                return (
                    <div 
                        key={playlist.id}
                        className="media-playlist"
                        onContextMenu={this.showContextMenu(playlist.id)}>

                        <Media
                            media={playlist}
                            type='playlist'
                            size='medium'
                            view='index'
                            songIds={songIds}
                            path={`/playlist/${playlist.id}`}
                        />
                    </div>
                )
            })
        );
        
        
        

        return(
            <div className="media-index-root" onClick={this.closeContextMenu}>
                <ul className="media-index-container">
                    <div className="media-index">
                        {playlistList}
                    </div>
                </ul>

                <div className="context-menu"
                    ref={this.moreMenu}>
                    <ul className="context-menu-wrap">
                        <li className="context-menu-title">Song Options</li>
                        <li className="context-menu-item" onClick={this.removePlaylist}>
                            <span className="subContext-title">Remove Playlist</span>
                            <ul className="subContext-menu">

                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}



const msp = state => ({
    currentUserId: state.session.currentUser.id,
    playlists: Object.values(state.entities.playlists)
})


const mdp = dispatch => ({
    fetchPlaylists: (currentUserId) => dispatch(fetchPlaylists(currentUserId)),
    deletePlaylist: (currentUserId, playlistId) => dispatch(deletePlaylist(currentUserId, playlistId))
});


export default withRouter(connect(msp, mdp)(PlaylistIndex));





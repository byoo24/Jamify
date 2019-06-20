import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal, openModal } from '../../actions/modal_action';
import { createPlaylist, fetchPlaylists } from '../../actions/playlist_actions';
import { addSongToPlaylist } from '../../actions/playlist_actions';



class addPlaylistForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
        this.changeName = this.changeName.bind(this);
        this.mediaControl = React.createRef();
        this.activeMedia = this.activeMedia.bind(this);
        this.inactiveMedia = this.inactiveMedia.bind(this);

        // this.newPlaylist = this.newPlaylist.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const currentUserId = this.props.currentUserId;
        this.props.fetchPlaylists(currentUserId);
    }

    changeName(e) {
        this.setState({
            name: e.target.value
        });
    }


    activeMedia() {
        let mediaComponent = this.mediaControl.current;
        mediaComponent.classList.add('active');
    }

    inactiveMedia() {
        // let mediaComponent = this.mediaControl.current;
        // mediaComponent.classList.remove('active');
    }

    
    handleClick(playlistId) {
        const songId = this.props.songToBeAdded;
        this.props.addSongToPlaylist(playlistId, songId).then(
            () => { this.props.closeModal(); }
        );

    }

    // newPlaylist() {
    //     let newPlaylistId = null;
    //     const currentUserId = this.props.currentUserId;

    //     this.props.createPlaylist(currentUserId, this.state)
    //         .then((promise) => {
    //             newPlaylistId = promise.playlist.id;
    //         }).then(() => this.props.closeModal())
    //         .then(() => this.props.history.push(`/playlist/${newPlaylistId}`));
    // }


    render() {
        const { playlists } = this.props;
        const allPlaylists = (
            playlists.map((playlist) => {
                return (
                    <div className="media-object addPlaylist-object" 
                        key={playlist.id} 
                        ref={this.mediaControl}
                        onClick={() => this.handleClick(playlist.id)}>
                            
                        <div className="media-object-container media-medium">
                            <span className="spoticon-playlist-32"></span>
                            <span className="media-play">
                                <span className="spoticon-add-to-playlist-32"></span>
                            </span>
                        </div>
                        <div className="media-info">
                            <span className="media-title">
                                {playlist.name}
                            </span>
                        </div>
                    </div>
                )
            })
        );


        return (
            <div className="modal-playlist-container modal-addSongs-container">
                <div className="modal-playlist-wrapper">
                    <button className="modal-playlist-close" onClick={this.props.closeModal}>
                        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>Close</title><path d="M31.098 29.794L16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143" fill="#fff" fillRule="evenodd"></path></svg>
                    </button>
                    <h1 className="modal-playlist-title">Add to playlist</h1>
                    <div className="modal-close-row">
                        <div className="modal-btn">
                            <button className="btn modal-create" onClick={() => this.props.openModal()}>New Playlist</button>
                        </div>
                    </div>
                <div className="add-song-playlist">
                    {allPlaylists}
                </div>
                </div>
            </div>
        );
    }
}

// export default addPlaylistForm;


const msp = state => {
    const { currentUser } = state.session;
    const playlists = Object.values(state.entities.playlists);
    const songToBeAdded = state.ui.songToBeAdded;
    return {
        currentUserId: currentUser.id,
        playlists,
        songToBeAdded
        // newPlaylistId: playlists[playlists.length - 1].id
    }
}

const mdp = dispatch => ({
    openModal: () => dispatch(openModal('newPlaylist')),
    closeModal: () => dispatch(closeModal()),
    fetchPlaylists: (currentUserId) => dispatch(fetchPlaylists()),
    addSongToPlaylist: (playlistId, songId) => dispatch(addSongToPlaylist(playlistId, songId))
});

export default withRouter(connect(msp, mdp)(addPlaylistForm));
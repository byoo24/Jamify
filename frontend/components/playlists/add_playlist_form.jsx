import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_action';
import { createPlaylist } from '../../actions/playlist_actions';

class addPlaylistForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
        this.changeName = this.changeName.bind(this);
        this.newPlaylist = this.newPlaylist.bind(this);
    }

    changeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    newPlaylist() {
        let newPlaylistId = null;
        this.props.createPlaylist(this.state)
        .then((promise) => {
            newPlaylistId = promise.playlist.id; 
        }).then(() => this.props.closeModal())
          .then(() => this.props.history.push(`/playlist/${newPlaylistId}`));
    }


    render() {
        return (
            <div className="modal-playlist-container">
                <div className="modal-playlist-wrapper">
                    <button className="modal-playlist-close" onClick={this.props.closeModal}>
                        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>Close</title><path d="M31.098 29.794L16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143" fill="#fff" fillRule="evenodd"></path></svg>
                    </button>
                    <h1 className="modal-playlist-title">Create new playlist</h1>
                    <div className="modal-playlist-input">
                        <label htmlFor="modal-playlist-text">Playlist Name</label>
                        <input type="text" id="modal-playlist-text" onChange={this.changeName} placeholder="Start typing..." />
                    </div>
                    <div className="modal-close-row">
                        <div className="modal-btn">
                            <button className="btn modal-cancel" onClick={this.props.closeModal}>Cancel</button>
                        </div>
                        <div className="modal-btn">
                            <button className="btn modal-create" onClick={() => this.newPlaylist()}>Create</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// export default addPlaylistForm;


const msp = state => {
    const { currentUser } = state.session;
    // const { playlists } = state.entities;

    const playlists = Object.values(state.entities.playlists);
    return {
        currentUserId: currentUser.id,
        // newPlaylistId: playlists[playlists.length - 1].id
    }
}

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    createPlaylist: data => {
        return dispatch(createPlaylist(data))
    }
});

export default withRouter(connect(msp, mdp)(addPlaylistForm));
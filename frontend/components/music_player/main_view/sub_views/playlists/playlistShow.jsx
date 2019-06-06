import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPlaylist } from '../../../../../actions/playlist_actions';

class PlaylistShow extends React.Component {

    componentDidMount() {
        const currentUserId = this.props.currentUserId;
        const playlistId = this.props.match.params.playlistId;
        this.props.fetchPlaylist(currentUserId, playlistId);
    }

    render() {
        const { playlist } = this.props;

        const title = playlist ? playlist.name : null;
        
        return(
            <div className="playlist-show">
                <div className="playlist-container">
                    <div className="playlist-left">
                        <Link to="/browse" className="album-large">
                            <div className="icon-container">
                                <div className="icon icon-music"></div>
                            </div>
                        </Link>
                        <h1>{title}</h1>
                    </div>

                    <div className="playlist-right">

                    </div>
                </div>
            </div>
        )
    }
}



const msp = (state, ownProps) => {
    const playlistId = ownProps.match.params.playlistId;
    return {
        playlist: state.entities.playlists[playlistId],
        currentUserId: state.session.currentUser.id
    }
}


const mdp = dispatch => {
    return {
        fetchPlaylist: (currentUserId, playlistId) => dispatch(fetchPlaylist(currentUserId, playlistId))
    }
}


export default withRouter(connect(msp, mdp)(PlaylistShow));
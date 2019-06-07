import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPlaylist } from '../../../../../actions/playlist_actions';
import EmptyState from '../empty_state';

class PlaylistShow extends React.Component {

    componentDidMount() {
        const currentUserId = this.props.currentUserId;
        const playlistId = this.props.match.params.playlistId;
        this.props.fetchPlaylist(currentUserId, playlistId);
        this.changeBg("burgundy-gradient");
    }


    changeBg(classBg) {
        const bg = document.getElementById('bg-gradient');
        bg.className = '';

        if (classBg) {
            bg.classList.add(classBg);
        }
    }

    render() {
        const { playlist } = this.props;

        const title = playlist ? playlist.name : null;
        
        return(
            <div className="album-show">
                <div className="album-show-container">
                    <div className="album-info">
                        <Link to="/browse" className="album-large">
                            <div className="icon-container">
                                <div className="icon icon-music"></div>
                            </div>
                        </Link>
                        <h1>{title}</h1>
                    </div>

                    <div className="music-playlist">
                        <EmptyState
                            title={"It looks a big empty here."}
                            subtitle={"Browse and find music you love."}
                            iconType="astronaut"
                        />
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
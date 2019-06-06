import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPlaylists } from '../../../../../actions/playlist_actions';
import PlaylistIndexItem from './_playlistIndexItem';

class PlaylistIndex extends React.Component {

    componentDidMount() {
        const currentUserId = this.props.currentUserId;
        this.props.changeBg('red-gradient');
        this.props.fetchPlaylists(currentUserId);
    }

    render() {
        const { playlists } = this.props;

        const allPlaylists = playlists.map((playlist) => {
            return (
                <li key={playlist.id}><PlaylistIndexItem playlist={playlist} /></li>
            )
        });

        return(
            <div className="playlist-index">
                <ul className="playlist-index-container">
                    {allPlaylists}
                </ul>
            </div>
        )
    }
}



const msp = state => ({
    currentUserId: state.session.currentUser.id,
    playlists: Object.values(state.entities.playlists)
})


const mdp = dispatch => ({
    fetchPlaylists: (currentUserId) => dispatch(fetchPlaylists(currentUserId))
});


export default withRouter(connect(msp, mdp)(PlaylistIndex));





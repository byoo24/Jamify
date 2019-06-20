import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPlaylists } from '../../../../actions/playlist_actions';
import PlaylistIndexItem from './_playlistIndexItem';

import EmptyState from '../empty_state';
import Media from '../media';

class PlaylistIndex extends React.Component {

    componentDidMount() {
        const currentUserId = this.props.currentUserId;
        this.props.changeBg('red-gradient');
        this.props.fetchPlaylists(currentUserId);
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
                    <Media
                        key={playlist.id}
                        media={playlist}
                        type='playlist'
                        size='medium'
                        view='index'
                        songIds={songIds}
                        path={`/playlist/${playlist.id}`}
                    />
                )
            })
        );
        
        
        

        return(
            <div className="media-index-root">
                <ul className="media-index-container">
                    <div className="media-index">
                        {playlistList}
                    </div>
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





import React from 'react';
import { connect } from 'react-redux';
import { fetchPlaylists } from '../../../../../actions/playlist_actions';
import PlaylistIndexItem from './_playlistIndexItem';

class PlaylistIndex extends React.Component {

    componentDidMount() {
        this.props.changeBg('black-gradient');
        this.props.fetchPlaylists();
    }

    render() {
        const { playlists } = this.props;

        const allPlaylists = playlists.map((playlist) => {
            return (
                <li key={playlist.id}><PlaylistIndexItem playlist={playlist} /></li>
            )
        })

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
    playlists: Object.values(state.entities.playlists)
})


const mdp = dispatch => ({
    fetchPlaylists: () => dispatch(fetchPlaylists())
});


export default connect(msp, mdp)(PlaylistIndex);





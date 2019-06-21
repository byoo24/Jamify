import React from 'react';
import { connect } from 'react-redux';

import EmptyState from '../empty_state';
import { Link } from 'react-router-dom';
import { fetchArtists } from '../../../../actions/artist_actions';
import Media from '../media';

class Artists extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.changeBg('indigo-gradient');
        this.props.fetchArtists();
    }


    render() {
        const { artists } = this.props;

        const listArtists = artists ? artists.map((artist) => {
            
            let albumId = artist.albumIds !== undefined ? artist.albumIds[0] : null;

            return (
                <Media
                    key={artist.id}
                    media={artist}
                    type='artist'
                    size='medium'
                    view='index'
                    thumbnail_url={artist.image_url}
                    albumId={albumId}
                    path={`/artist/${artist.id}`}
                />
            )
        }) : null;

        let showArtists = !(artists) ? (
            <EmptyState
                title={"Featured playlists will appear here."}
                subtitle={"Follow playlists you love to add them to Your Library."}
                iconType="disc"
            />
        ) : (
            <>
            <div className="media-index-root">
                <div className="media-index-container">
                    <h1 className="media-index-label">Artists</h1>
                    <div className="media-index">
                        {listArtists}
                    </div>
                </div>
            </div>
            </>
        )


        return(
            <>
                { showArtists }
            </>
        )
    }
}




const msp = state => ({
    artists: Object.values(state.entities.artists),
});


const mdp = dispatch => ({
    fetchArtists: () => dispatch(fetchArtists())
});


export default connect(msp, mdp)(Artists);




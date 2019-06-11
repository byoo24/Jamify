import React from 'react';
import EmptyState from '../empty_state';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAlbums } from '../../../../actions/album_actions';
import { fetchArtists } from '../../../../actions/artist_actions';
import Media from '../media';

class Featured extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.changeBg('indigo-gradient');
        this.props.fetchAlbums();
        this.props.fetchArtists();
    }


    render() {
        const { albums, artists } = this.props;

        const listAlbums = albums.map((album) => {
            return (
                <Media 
                    key={album.id}
                    media={album}
                    type='album'
                    size='medium'
                    view='index'
                    path={`/album/${album.id}`}
                />
            )
        });

        const listArtists = artists.map((artist) => {
            return (
                <Media
                    key={artist.id}
                    media={artist}
                    type='artist'
                    size='medium'
                    view='index'
                    path={`/artist/${artist.id}`}
                />
            )
        });

        let showFeatured = !(albums && artists) ? (
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

            <div className="media-index-root">
                <div className="media-index-container">
                    <h1 className="media-index-label">Albums</h1>
                    <div className="media-index">
                        {listAlbums}
                    </div>

                </div>
            </div>
            </>
        )


        return(
            <>
                { showFeatured }
            </>
        )
    }
}




const msp = state => ({
    artists: Object.values(state.entities.artists),
    albums: Object.values(state.entities.albums)
});


const mdp = dispatch => ({
    fetchAlbums: () => dispatch(fetchAlbums()),
    fetchArtists: () => dispatch(fetchArtists())
});


export default connect(msp, mdp)(Featured);




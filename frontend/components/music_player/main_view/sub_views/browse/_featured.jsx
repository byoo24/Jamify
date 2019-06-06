import React from 'react';
import EmptyState from '../empty_state';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAlbums } from '../../../../../actions/album_actions';
import { fetchArtists } from '../../../../../actions/artist_actions';

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
                <li key={album.id}>
                    <div className="album-wrap">
                        <Link to={{ pathname: `/album/${album.id}` }} className="album-medium">
                                <div className="icon-container box-shadow">
                                    <div className="icon icon-music"></div>
                                </div>
                            <div className="album-cover-medium" style={{ backgroundImage: `url(${album.cover_image})`}}></div>
                        </Link>
                        <div className="mo-info">
                            <span className="playlist-title">{album.title}</span>
                        </div>
                    </div>
                </li>
            )
        });

        const listArtists = artists.map((artist) => {
            return (
                <li key={artist.id}>

                    <div className="album-wrap">
                        <Link to={{ pathname: `/artist/${artist.id}` }} className="album-medium" >
                            <div className="icon-container box-shadow">
                                <div className="icon icon-music"></div>
                            </div>
                            <div className="album-cover-medium" style={{ backgroundImage: `url(${artist.image_url})` }}></div>
                        </Link>
                        <div className="mo-info">
                            <span className="playlist-title">{artist.name}</span>
                        </div>
                    </div>
                </li>
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
            <div className="playlist-index">
                    <h1>Artists</h1>
                <ul className="playlist-index-container">
                    {listArtists}
                </ul>
            </div>

            <div className="playlist-index">
                <h1>Albums</h1>
                <ul className="playlist-index-container">
                    {listAlbums}
                </ul>
            </div>
            </>
        )


        return(
            <div className="featured-list">
                <div className="featured-container">
                    { showFeatured }

                </div>
            </div>
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




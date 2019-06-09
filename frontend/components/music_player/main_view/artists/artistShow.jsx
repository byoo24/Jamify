import React from 'react';
import { connect } from 'react-redux';
import { fetchArtist } from '../../../../actions/artist_actions';
import { withRouter, Link } from 'react-router-dom';
import Media from '../media';

class ArtistShow extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchArtist(this.props.match.params.artistId);
        // this.props.fetchAlbumsFromArtist(this.props.match.params.artistId);

    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.artistId !== this.props.match.params.artistId){
            this.props.fetchArtist(this.props.match.params.artistId);
        }
    }

    render() {
        
        const {artist, albums} = this.props;
        let artistName = null, bgCover = null, albumList;
        let artistId = this.props.match.params.artistId;

        if (artist) {
            artistName = artist.name;
            bgCover = {
                backgroundImage: `url(${artist.cover_url})`
            }
        }

        
        const albumsList = albums.length > 0 ? (
            albums.map((album) => (
                <Media
                    key={album.id}
                    media={album}
                    icon={'album'}
                    size='medium'
                    view='index'
                />
            ))
        ) : null;

        // if (albums.length > 0) {
        //     albumList = albums.filter((album) => album.artist_id == artistId);
        //     albumList = albumList.map((album) => {
        //         return (
        //             <li key={album.id}>
        //                 <div className="album-wrap">
        //                     <Link to={{ pathname: `/album/${album.id}` }} className="album-medium">
        //                         <div className="icon-container box-shadow">
        //                             <div className="icon icon-music"></div>
        //                         </div>
        //                         <div className="album-cover-medium" style={{ backgroundImage: `url(${album.cover_image})` }}></div>
        //                     </Link>
        //                     <div className="mo-info">
        //                         <span className="playlist-title">{album.title}</span>
        //                     </div>
        //                 </div>
        //             </li>
        //         )
        //     });
        // }


        return(
            <div className="artist-show">
                <div className="artist-header">
                    <div className="artist-cover" style={bgCover}>
                        <div className="artist-wrapper">
                            <div className="artist-info">
                                <h1 className="artist-name">{artistName}</h1>
                            </div>
                            <div className="collection-header">
                                <div className="sub-nav artist-nav">
                                    <ul className="sub-nav-container artist-nav-container">
                                        <li><a className="sub-nav-item artist-nav-item">Overview</a></li>
                                        <li><a className="sub-nav-item artist-nav-item">Related Artists</a></li>
                                        <li><a className="sub-nav-item artist-nav-item">About</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="media-index-root">
                    <div className="media-index-container">
                        <div className="media-index">
                            {albumsList}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const msp = (state, ownProps) => {
    const artistId = ownProps.match.params.artistId;
    const albums = Object.values(state.entities.albums).filter((album) => album.artist_id == artistId);

    return {
        artist: state.entities.artists[artistId],
        albums
    }
}

const mdp = dispatch => {
    return {
        fetchArtist: id => dispatch(fetchArtist(id)),
        // fetchAlbumsFromArtist: artistId => dispatch(fetchAlbumsFromArtist(artistId))
    }
}

export default withRouter(connect(msp, mdp)(ArtistShow));
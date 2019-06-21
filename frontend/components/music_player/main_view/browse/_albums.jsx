import React from 'react';
import EmptyState from '../empty_state';
import { connect } from 'react-redux';

import { fetchAlbums } from '../../../../actions/album_actions';
import Media from '../media';




class Albums extends React.Component {


    componentDidMount() {
        this.props.changeBg('burgundy-gradient');
        this.props.fetchAlbums();

    }



    render() {
        const { albums } = this.props;

        

        const listAlbums = albums.map((album) => {
            return (
                <Media
                    key={album.id}
                    media={album}
                    type='album'
                    size='medium'
                    view='index'
                    thumbnail_url={album.cover_image}
                    songIds={album.songIds}
                    path={`/album/${album.id}`}
                />
            )
        });


        let displayAlbums = !(albums) ? (
            <EmptyState
                title={"Featured playlists will appear here."}
                subtitle={"Follow playlists you love to add them to Your Library."}
                iconType="disc"
            />
        ) : (
                <>
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


        return (
            <>
                {displayAlbums}
            </>
        )
    }
}




const msp = state => ({
    albums: Object.values(state.entities.albums)
});


const mdp = dispatch => ({
    fetchAlbums: () => dispatch(fetchAlbums()),
});


export default connect(msp, mdp)(Albums);

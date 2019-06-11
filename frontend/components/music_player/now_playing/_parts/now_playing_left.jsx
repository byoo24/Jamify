import React from 'react';
import { Link } from 'react-router-dom';
import AlbumThumbnail from '../../_partials/albumThumbnail';


export default ({ title, artist_name, album_image }) => {

    const thumbnailStyle = album_image ? {
        background: `url(${album_image})`
    } : null;

    return(
        <div className="now-playing-bar-left">
            <div className="now-playing">
                <span to="/browse" className="album-thumbnail box-shadow now-playing-thumbnail">

                    <div className="icon-container">
                        <i className="spoticon-playlist-16"></i>
                    </div>
                    <div className="album-cover-thumbnail" style={thumbnailStyle}></div>


                </span>

                <div className="now-playing-track-info ellipsis-one-line">
                    <div className="now-playing-track-title ellipsis-one-line">
                        <span to="/browse" className="now-playing-track-title ellipsis-one-line">
                            { title }
                        </span>
                    </div>
                    <div className="now-playing-track-artist ellipsis-one-line">
                        <span to="/browse" className="now-playing-track-artist ellipsis-one-line">
                            { artist_name }
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}


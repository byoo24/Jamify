import React from 'react';
import { Link } from 'react-router-dom';
import AlbumThumbnail from '../../_partials/albumThumbnail';


export default () => {

    return(
        <div className="now-playing-bar-left">
            <div className="now-playing">
                <Link to="/browse" className="album-thumbnail box-shadow now-playing-thumbnail">
                    <AlbumThumbnail />
                </Link>

                <div className="now-playing-track-info ellipsis-one-line">
                    <div className="now-playing-track-title ellipsis-one-line">
                        <Link to="/browse" className="now-playing-track-title ellipsis-one-line">
                            I Don't Care (with Justin Bieber)
                        </Link>
                    </div>
                    <div className="now-playing-track-artist ellipsis-one-line">
                        <Link to="/browse" className="now-playing-track-artist ellipsis-one-line">
                            Ed Sheeran, Justin Bieber
                                                </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

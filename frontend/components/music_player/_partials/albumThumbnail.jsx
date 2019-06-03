import React from 'react';

class AlbumThumbnail extends React.Component {
    
    render() {
        const { image_url } = this.props;
        return(
            <>
                <div className="album-icon-container">
                    <i className="album-icon album-icon-music"></i>
                </div>
                <div className="album-cover-thumbnail"></div>
            </>
        );
    }
}

export default AlbumThumbnail;
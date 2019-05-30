import React from 'react';

class AlbumThumbnail extends React.Component {
    
    render() {
        const { image_url } = this.props;
        return(
            <div className="thumbnail-album">
                <div className="music-icon">
                    <i className="fas fa-music"></i>
                </div>
                <div className="cover-art-image"></div>
            </div>
        );
    }
}

export default AlbumThumbnail;
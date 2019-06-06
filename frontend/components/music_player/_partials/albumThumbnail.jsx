import React from 'react';

class AlbumThumbnail extends React.Component {
    
    render() {
        const { album_image } = this.props;

        const thumbnailStyle = album_image ? {
            background: `url(${album_image})`
        } : null;
        
        return(
            <>
                <div className="icon-container">
                    <i className="icon icon-music"></i>
                </div>
                <div className="album-cover-thumbnail" style={thumbnailStyle}></div>
            </>
        );
    }
}

export default AlbumThumbnail;
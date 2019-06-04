import React from 'react';

class AlbumThumbnail extends React.Component {
    
    render() {
        const { image_url } = this.props;
        return(
            <>
                <div className="icon-container">
                    <i className="icon icon-music"></i>
                </div>
                <div className="album-cover-thumbnail"></div>
            </>
        );
    }
}

export default AlbumThumbnail;
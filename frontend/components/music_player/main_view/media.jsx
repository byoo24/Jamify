import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class Media extends React.Component {
    constructor(props) {
        super(props);

        this.mediaControl = React.createRef();

        this.activeMedia = this.activeMedia.bind(this);
        this.inactiveMedia = this.inactiveMedia.bind(this);
        this.goToPath = this.goToPath.bind(this);
    }

    activeMedia() {
        let mediaComponent = this.mediaControl.current;
        mediaComponent.classList.add('active');
    }

    inactiveMedia(){
        let mediaComponent = this.mediaControl.current;
        mediaComponent.classList.remove('active');
    }

    goToPath() {
        if(this.props.view == 'show' && !this.props.path) {
            return;
        }
        const path = this.props.path;
        this.props.history.push(path);
    }

    render() {
        const { media, icon, user, size, view, path } = this.props;
        let containerClassNames = null;
        let spotIcon = null;
        let mediaInfo = null;

        switch( icon ){
            case 'playlist':
                containerClassNames = `media-object-container media-${size}`;
                spotIcon = <span className="spoticon-collaborative-playlist-32"></span>; 
                break;
            case 'genre':
                containerClassNames = `media-object-container media-${size}`;
                spotIcon = <span className="spoticon-collaborative-playlist-32"></span>;
                break;
            case 'album':
                containerClassNames = `media-object-container media-${size}`;
                spotIcon = <span className="spoticon-album-contained-32"></span>;
                break;
            case 'artist':
                containerClassNames = `media-object-container media-${size} media-artist`;
                spotIcon = <span className="spoticon-artist-32"></span>;
                break;
        }

        if (media) {
            switch( view ) {
                case 'show':
                    mediaInfo = (
                        <>
                        <h1 className='media-title'>
                            {media ? media.title : null}
                            {media ? media.name : null}
                            {media ? media.category_name : null}
                        </h1>
                        <span className='media-author'>
                            {user ? user.name : null}
                        </span>
                        </>
                    );
                    break;
                case 'index':
                    mediaInfo = (
                        <span className="media-title">
                            {media ? media.title : null}
                            {media ? media.name : null}
                            {media ? media.category_name : null}
                        </span>
                    );
                    break;
            }
        }

        return(
            <div className="media-object" 
                ref={this.mediaControl} 
                onClick={this.goToPath}
                onMouseEnter={this.activeMedia} 
                onMouseLeave={this.inactiveMedia}>

                <Link to={path} className={containerClassNames}>
                    {spotIcon}
                    <span className="media-play">
                        <span className="spoticon-play-32"></span>
                    </span>
                </Link>
                <div className="media-info">
                    { mediaInfo }
                </div>
            </div>
        )
    }
}

export default withRouter(Media);
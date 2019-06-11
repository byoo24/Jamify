import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { playCurrentList } from '../../../actions/player_actions';
import { fetchAlbum } from '../../../actions/album_actions';
import { connect } from 'react-redux';

class Media extends React.Component {
    constructor(props) {
        super(props);

        this.mediaControl = React.createRef();

        this.activeMedia = this.activeMedia.bind(this);
        this.inactiveMedia = this.inactiveMedia.bind(this);
        this.goToPath = this.goToPath.bind(this);
        this.playThisPlaylist = this.playThisPlaylist.bind(this);
    }

    activeMedia() {
        let mediaComponent = this.mediaControl.current;
        mediaComponent.classList.add('active');
    }

    inactiveMedia(){
        let mediaComponent = this.mediaControl.current;
        mediaComponent.classList.remove('active');
    }

    goToPath(e) {
        e.preventDefault();
        
        if(this.props.view == 'show' && !this.props.path) {
            return;
        }
        const path = this.props.path;
        this.props.history.push(path);
    }

    playThisPlaylist() {
        const { media, type, songs } = this.props;
        const { songIds } = media;
        let playlist = Object.values(songs);
        
        const that = this;

        if(playlist.length > 0) {
            this.props.playCurrentList(playlist);
        } else if (type == 'album') {
            this.props.fetchAlbum(media.id)
                .then((payload) => {
                    debugger
                    playlist = Object.values(payload.songs);
                }).then(() => this.props.playCurrentList(playlist));
        }

    }


    render() {
        const { media, type, user, size, view, path, playThisPlaylist } = this.props;
        let containerClassNames = null;
        let spotIcon = null;
        let mediaInfo = null;

        switch( type ){
            case 'playlist':
                containerClassNames = `media-object-container media-${size}`;
                spotIcon = <span className="spoticon-playlist-32"></span>; 
                break;
            case 'genre':
                containerClassNames = `media-object-container media-${size}`;
                spotIcon = <span className="spoticon-playlist-32"></span>;
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
                onMouseEnter={this.activeMedia} 
                onMouseLeave={this.inactiveMedia}>

                <div className={containerClassNames}>
                    {spotIcon}
                    <span className="media-play">
                        <span className="spoticon-play-32"
                            onClick={this.playThisPlaylist}></span>
                    </span>
                    <Link to={path} className="media-link"></Link>
                </div>

                <div className="media-info">
                    { mediaInfo }
                </div>
            </div>
        )
    }
}

const msp = state => ({
    songs: state.entities.songs
});


const mdp = dispatch => ({
    fetchAlbum: albumId => dispatch(fetchAlbum(albumId)),
    playCurrentList: playlistIds => dispatch(playCurrentList(playlistIds))
});

export default withRouter(connect(msp, mdp)(Media));
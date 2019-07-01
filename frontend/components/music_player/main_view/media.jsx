import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { playCurrentList } from '../../../actions/player_actions';
import { fetchAlbum } from '../../../actions/album_actions';
import { fetchPlaylist } from '../../../actions/playlist_actions';
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
        if (mediaComponent !== null){
            mediaComponent.classList.add('active');
        }
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
        const { media, type, songs, songIds, albumId } = this.props;
        // const { songIds } = media;
        let playlist = []; //fallback

        
        const that = this;
        
        if ((type == 'album' && songIds !== undefined) && (songs.length > 0 && songIds.length > 0)) {
            playlist = songs.filter((song) => songIds.includes(song.id));

            if (playlist.length > 0){
                this.props.playCurrentList(playlist);
                return;
            }

        } else if (type == 'artist' && (songs.length > 0 && typeof albumId === 'number' )) {
            playlist = songs.filter((song) => song.album_id === albumId);

            if (playlist.length > 0){
                this.props.playCurrentList(playlist);
                return;
            }

        }
        
        if (type == 'album') {
            this.props.fetchAlbum(media.id)
                .then((payload) => {
                    playlist = Object.values(payload.songs);
                }).then(() => this.props.playCurrentList(playlist));
                
        } else if (type == 'playlist') {
            const { currentUserId } = this.props;
            this.props.fetchPlaylist(currentUserId, media.id)
                .then((payload) => {
                    playlist = Object.values(payload.songs);
                    that.props.playCurrentList(playlist);
                });

        } else if (type == 'artist') {
            this.props.fetchAlbum(media.albumIds[0])
                .then((payload) => {
                    playlist = Object.values(payload.songs);
                    that.props.playCurrentList(playlist);
                });
        }

    }


    render() {
        const { media, type, user, size, view, path, thumbnail_url } = this.props;
        let containerClassNames = null;
        let spotIcon = null;
        let mediaInfo = null;
        
        let coverImgClass = "media-cover";

        let coverImgBG = {
            backgroundImage: `url(${thumbnail_url})`,
        }


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
                coverImgBG = { backgroundImage: `url(${thumbnail_url})`, borderRadius: '500px' };
                coverImgClass = "media-cover media-artist";
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
                    
                    <span className="media-play">
                        <span className="spoticon-play-32"
                            onClick={this.playThisPlaylist}></span>
                    </span>
                    <div className={coverImgClass} style={coverImgBG}></div>
                    {spotIcon}
                    {
                        path === undefined ? (
                            <div className="media-link"></div>
                        ) : (
                            <Link to={path} className="media-link"></Link>
                        )
                    }
                </div>

                <div className="media-info">
                    { mediaInfo }
                </div>
            </div>
        )
    }
}

const msp = state => {
    return {
        songs: Object.values(state.entities.songs),
        currentUserId: state.session.currentUser.id
    }
};


const mdp = dispatch => ({
    fetchAlbum: albumId => dispatch(fetchAlbum(albumId)),
    fetchPlaylist: (currentUserId, playlistId) => dispatch(fetchPlaylist(currentUserId, playlistId)),
    playCurrentList: playlistIds => dispatch(playCurrentList(playlistIds)),
});

export default withRouter(connect(msp, mdp)(Media));
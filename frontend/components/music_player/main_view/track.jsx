import React from 'react';
import { playCurrentSong } from '../../../actions/player_actions';
import { openContextMenu } from '../../../actions/contextMenu_actions';
import { connect } from 'react-redux';

import MenuTrack from './contextMenu/menuTrack';

class Track extends React.Component {
    constructor(props) {
        super(props);

        this.trackControl = React.createRef();

        this.changeToIconPlay = this.changeToIconPlay.bind(this);
        this.changeToIconTrack = this.changeToIconTrack.bind(this);
    }

    changeToIconPlay() {
        let icon = this.trackControl.current;
        icon.classList.remove('spoticon-track-16');
        icon.classList.add('spoticon-play-16');
    }

    changeToIconTrack() {
        let icon = this.trackControl.current;
        icon.classList.remove('spoticon-play-16');
        icon.classList.add('spoticon-track-16');
    }

    


    render() {
        const { song, action } = this.props;

        
        
        return (
            <div className="track-row" 
                    onContextMenu={() => action(song.id)}
                    onMouseEnter={this.changeToIconPlay} 
                    onMouseLeave={this.changeToIconTrack}
                    onDoubleClick={() => this.props.playCurrentSong(song)}>
                <div className="track-col control">
                    <div className="spoticon-track-16" 
                        ref={this.trackControl}
                        onClick={() => this.props.playCurrentSong(song)}>
                    </div>
                </div>
                <div className="track-col info">
                    <span className="info-title">{song.title}</span>
                    <span className="info-artist"></span>
                </div>
                <div className="track-col more">
                    <span className="more-menu spoticon-more-32"></span>
                </div>
                <div className="track-col duration">{song.duration}</div>


                
            </div>
        );
    }
}



const msp = state => ({
    contextMenu: state.ui.contextMenu
})


const mdp = dispatch => ({
    playCurrentSong: songId => dispatch(playCurrentSong(songId))
});


export default connect(msp, mdp)(Track);
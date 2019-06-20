import React from 'react';


import Navbar from './navbar/navbar_container';
import NowPlaying from './now_playing/now_playing';
import MainView from './main_view/main_view';

import { closeContextMenu } from '../../actions/contextMenu_actions';
import { clearPlaylistMessage } from '../../actions/playlist_actions';
import { connect } from 'react-redux';
import errorsReducer from '../../reducers/errors_reducer';



class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);
        // this.preventRightClick = this.preventRightClick.bind(this);
        this.closeContextMenu = this.closeContextMenu.bind(this);
    }


    showPlaylistMessage() {
        const { playlistMessages } = this.props;
        let playlistMessage = null;

        // if (playlistMessages.length > 0) {
            if (playlistMessages[0].includes('Sorry something went wrong')) {
                playlistMessage = (
                    <span className="playlist-error">
                        {playlistMessages[0]}
                    </span>
                )
            } else if (playlistMessages[0].includes('Track was added to your playlist')) {
                playlistMessage = (
                    <span className="playlist-success">
                        {playlistMessages[0]}
                    </span>
                )
            }
        // }

        return playlistMessage;
    }

    

    closeContextMenu() {
        if (this.props.contextMenu) {
            this.props.closeContextMenu();
        }
    }


    render() {
        const { playlistMessages } = this.props;
        let playlistMessage = null;

        if ( playlistMessages.length > 0) {
            playlistMessage = this.showPlaylistMessage();
            setTimeout(this.props.clearPlaylistMessage, 5000);
        } else {
            playlistMessage = null;
        }
        
  
        return (
            <>
                { playlistMessage }
                <div id="backdrop">
                    <div id="bg-gradient" className=""></div>
                </div>
                <div className="Root__top-container">
                    <Navbar />
                    <MainView />
                    <NowPlaying />
                </div>
            </>
        )
    }
}


const msp = state => ({
    contextMenu: state.ui.contextMenu,
    playlistMessages: state.errors.playlist
})

const mdp = dispatch => ({
    closeContextMenu: () => dispatch(closeContextMenu()),
    clearPlaylistMessage: () => dispatch(clearPlaylistMessage())
});


export default connect(msp, mdp)(MusicPlayer);
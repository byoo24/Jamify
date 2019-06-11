import React from 'react';


import Navbar from './navbar/navbar_container';
import NowPlaying from './now_playing/now_playing';
import MainView from './main_view/main_view';

import { closeContextMenu } from '../../actions/contextMenu_actions';
import { connect } from 'react-redux';



class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);
        // this.preventRightClick = this.preventRightClick.bind(this);
        this.closeContextMenu = this.closeContextMenu.bind(this);
    }

    closeContextMenu() {
        if (this.props.contextMenu) {
            this.props.closeContextMenu();
        }
    }


    render() {
  
        return (
            <>
                <div id="backdrop">
                    <div id="bg-gradient" className=""></div>
                </div>
                <div className="Root__top-container" onClick={this.closeContextMenu}>
                    <Navbar />
                    <MainView />
                    <NowPlaying />
                </div>
            </>
        )
    }
}


const msp = state => ({
    contextMenu: state.ui.contextMenu
})

const mdp = dispatch => ({
    closeContextMenu: () => dispatch(closeContextMenu())
});


export default connect(msp, mdp)(MusicPlayer);
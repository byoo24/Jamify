import React from 'react';


import Navbar from './navbar/navbar_container';
import NowPlaying from './now_playing/now_playing';
import MainView from './main_view/main_view';



class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);
    }

    

    render() {
  
        return (
            <>
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

export default MusicPlayer;
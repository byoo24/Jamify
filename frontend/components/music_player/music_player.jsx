import React from 'react';


import Navbar from './navbar/navbar_container';
import NowPlaying from './now_playing/now_playing';
import MainView from './main_view/main_view';



class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
    }

    logoutUser() {
        this.props.logout()
            .then(() => this.props.history.push('/'));
    }

    render() {
  
        return (
            <>
                <div className="bg-gradient red-gradient"></div>
                <div className="Root__top-container">
                    <button onClick={() => this.logoutUser()} className="temp-logout">Logout</button>
                    <Navbar />
                    <MainView />
                    <NowPlaying />
                </div>
            </>
        )
    }
}

export default MusicPlayer;
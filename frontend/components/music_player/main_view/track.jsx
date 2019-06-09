import React from 'react';

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
        const { song } = this.props;
        
        return (
            <div className="track-row" onMouseEnter={this.changeToIconPlay} onMouseLeave={this.changeToIconTrack}>
                <div className="track-col control">
                    <div className="spoticon-track-16" ref={this.trackControl}></div>
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


export default Track;


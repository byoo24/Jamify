import React from 'react';

class Tracks extends React.Component {
    componentDidMount() {
        this.props.changeBg('blue-gradient');
    }

    render() {
        return (
            <h1>Collection Album</h1>
        )
    }
}

export default Tracks;
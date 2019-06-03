import React from 'react';

class Artists extends React.Component {
    componentDidMount() {
        this.props.changeBg('indigo-gradient');
    }

    render() {
        return (
            <h1>Collection Album</h1>
        )
    }
}

export default Artists;
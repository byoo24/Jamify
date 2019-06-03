import React from 'react';


class Discover extends React.Component {
    componentDidMount() {
        this.props.changeBg('indigo-gradient');
    }

    render() {
        return (
            <h1>BROWSE Discover</h1>
        )
    }
}


export default Discover;
import React from 'react';


class Genres extends React.Component {

    componentDidMount() {
        this.props.changeBg('black-gradient');
    }

    render() {
        return (
            <h1>BROWSE Genres</h1>
        )
    }
}


export default Genres;
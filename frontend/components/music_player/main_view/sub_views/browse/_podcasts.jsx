import React from 'react';


class Podcasts extends React.Component {


    componentDidMount() {
        this.props.changeBg('burgundy-gradient');
    }



    render() {
        return (
            <h1>BROWSE Podcasts</h1>
        )
    }
}


export default Podcasts;
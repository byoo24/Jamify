import React from 'react';


class NewReleases extends React.Component {

    componentDidMount() {
        this.props.changeBg('indigo-gradient');
    }

    render() {
        return (
            <h1>BROWSE NewReleases</h1>
        )
    }
}


export default NewReleases;
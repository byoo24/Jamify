import React from 'react';


class Charts extends React.Component {

    componentDidMount() {
        this.props.changeBg('red-gradient');
    }

    render() {
        return (
            <h1>BROWSE CHARTS</h1>
        )
    }
}


export default Charts;
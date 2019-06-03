import React from 'react';



class Albums extends React.Component {
    componentDidMount(){
        this.props.changeBg('dark-red-gradient');
    }

    render() {
        return(
            <h1>Collection Album</h1>
        )
    }
}

export default Albums;
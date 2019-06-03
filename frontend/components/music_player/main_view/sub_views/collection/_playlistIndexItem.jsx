import React from 'react';

class PlaylistIndexItem extends React.Component {

    

    render() {
        const {name} = this.props.playlist;
        return(
            <h1>{name}</h1>
        )
    }
}


export default PlaylistIndexItem;
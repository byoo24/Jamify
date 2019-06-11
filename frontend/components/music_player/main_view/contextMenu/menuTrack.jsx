import React from 'react';

class MenuTrack extends React.Component {

    render() {
        return(
            <div className="context-menu" ref={this.contextMenu} >
                <ul>
                    <li>Add to Playlist</li>
                </ul>
            </div>
        )  
    }
}


export default MenuTrack;
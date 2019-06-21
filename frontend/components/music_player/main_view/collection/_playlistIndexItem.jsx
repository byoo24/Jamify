import React from 'react';
import { Link } from 'react-router-dom';
import Media from '../media';

class PlaylistIndexItem extends React.Component {

    

    render() {
        const {id, name} = this.props.playlist;
        return(
            <div className="album-wrap">
                <Link to={{pathname: `/playlist/${id}`}} className="album-medium">
                    <div className="icon-container box-shadow">
                        <div className="icon icon-music"></div>
                    </div>
                </Link>
                <div className="mo-info">
                    <span className="playlist-title">{name}</span>

                </div>
            </div>
        )
    }
}


export default PlaylistIndexItem;



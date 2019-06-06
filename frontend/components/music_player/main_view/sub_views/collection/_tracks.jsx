import React from 'react';
import EmptyState from '../empty_state';


class Tracks extends React.Component {
    componentDidMount() {
        this.props.changeBg('blue-gradient');
    }

    render() {
        return (
            <div className="collection-tracks">
                <EmptyState
                    title={"Songs you’ve liked live here"}
                    subtitle={"Find more of the songs you love in Browse and save to your Favorite Songs."}
                    iconType="disc"
                />
            </div>
        )
    }
}

export default Tracks;
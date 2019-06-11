import React from 'react';
import EmptyState from '../empty_state';


class Discover extends React.Component {
    componentDidMount() {
        this.props.changeBg('indigo-gradient');
    }

    render() {
        return (
            <div className="collection-artists">
                <EmptyState
                    title={"Explore new music."}
                    subtitle={"We have a song for every occasion."}
                    iconType="discover"
                />
            </div>
        )
    }
}


export default Discover;
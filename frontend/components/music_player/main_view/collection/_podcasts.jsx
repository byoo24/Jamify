import React from 'react';
import EmptyState from '../empty_state';



class Podcasts extends React.Component {
    componentDidMount() {
        this.props.changeBg('burgundy-gradient');
    }

    render() {
        return (
            <div className="collection-podcasts">
                <EmptyState
                    title={"Podcasts you’ve liked live here"}
                    subtitle={"Looking for something new?"}
                    iconType="podcast"
                />
            </div>
        )
    }
}

export default Podcasts;
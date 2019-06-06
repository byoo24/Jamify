import React from 'react';
import EmptyState from '../empty_state';


class NewReleases extends React.Component {

    componentDidMount() {
        this.props.changeBg('indigo-gradient');
    }

    render() {
        return (
            <div className="collection-artists">
                <EmptyState
                    title={"The newest songs will appear here."}
                    subtitle={"Be the first to hear the next greatest hit."}
                    iconType="disc"
                />
            </div>
        )
    }
}


export default NewReleases;
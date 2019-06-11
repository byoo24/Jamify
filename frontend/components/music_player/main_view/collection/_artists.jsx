import React from 'react';
import EmptyState from '../empty_state';


class Artists extends React.Component {
    componentDidMount() {
        this.props.changeBg('indigo-gradient');
    }

    render() {
        return (
            <div className="collection-artists">
                <EmptyState
                    title={"Your artists will appear here."}
                    subtitle={"Follow artists you love to add them to Your Library."}
                    iconType="artist"
                />
            </div>
        )
    }
}

export default Artists;
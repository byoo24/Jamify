import React from 'react';
import EmptyState from '../empty_state';


class Charts extends React.Component {

    componentDidMount() {
        this.props.changeBg('red-gradient');
    }

    render() {
        return (
            <div className="collection-artists">
                <EmptyState
                    title={"Featured charts will appear here."}
                    subtitle={"Find the best of the best here."}
                    iconType="archive"
                />
            </div>
        )
    }
}


export default Charts;
import React from 'react';
import EmptyState from '../empty_state';


class Genres extends React.Component {

    componentDidMount() {
        this.props.changeBg('indigo-gradient');
    }

    render() {
        return (
            <div className="collection-artists">
                <EmptyState
                    title={"Genres will appear here."}
                    subtitle={"Find your favorite songs based on your mood."}
                    iconType="genre"
                />
            </div>
        )
    }
}






export default Genres;
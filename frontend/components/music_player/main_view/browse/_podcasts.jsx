import React from 'react';
import EmptyState from '../empty_state';



class Podcasts extends React.Component {


    componentDidMount() {
        this.props.changeBg('burgundy-gradient');
    }



    render() {
        return (
            <div className="collection-artists">
                <EmptyState
                    title={"Featured podcasts will appear here."}
                    subtitle={"Follow podcasts you love."}
                    iconType="podcast"
                />
            </div>
        )
    }
}


export default Podcasts;
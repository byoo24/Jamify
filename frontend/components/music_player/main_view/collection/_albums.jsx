import React from 'react';
import EmptyState from '../empty_state';



class Albums extends React.Component {
    componentDidMount(){
        this.props.changeBg('dark-red-gradient');
    }

    render() {
        return(
            <div className="collection-albums">
                <EmptyState
                    title={"Save your favourite albums"}
                    subtitle={"Save albums you love to build the collection of your dreams."}
                    iconType="archive"
                />
            </div>
        )
    }
}

export default Albums;
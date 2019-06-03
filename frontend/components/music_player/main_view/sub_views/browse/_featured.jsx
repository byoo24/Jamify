import React from 'react';
import { Link } from 'react-router-dom';

class Featured extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.changeBg('indigo-gradient');
    }


    render() {
        return(
            <div className="main-menu">
                <h1>BROWSE FEATURED</h1>
            </div>
        )
    }
}


export default Featured;
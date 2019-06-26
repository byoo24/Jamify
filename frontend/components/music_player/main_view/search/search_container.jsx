import React from 'react';
import { connect } from 'react-redux';
import { fetchSearchResults } from '../../../../actions/search_actions';
// import { withRouter } from 'react-router-dom';
import Search from './search';
// import { logout } from '../../actions/session_actions';


// const msp = state => {

//     return {

//     }
// }




const mdp = dispatch => {

    return {
        fetchSearchResults: (input) => dispatch(fetchSearchResults(input))
    }
}


export default connect(null, mdp)(Search);
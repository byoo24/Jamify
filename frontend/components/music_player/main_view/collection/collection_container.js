import { connect } from 'react-redux';
import { openModal } from '../../../../actions/modal_action';
import Collection from './collection';



const mdp = dispatch => ({
    openModal: () => dispatch(openModal('newPlaylist'))
});

export default connect(null, mdp)(Collection);
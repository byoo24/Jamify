import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import MusicPlayer from './music_player';


const mdp = dispatch => ({
    logout: () => dispatch(logout())
});


export default connect(null, mdp)(MusicPlayer);
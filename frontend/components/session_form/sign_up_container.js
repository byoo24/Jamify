import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignUp from './sign_up';

const msp = (state) => ({
    errors: state.errors.session
});


const mdp = (dispatch) => ({
    signup: user => dispatch(signup(user))
});


export default connect(msp, mdp)(SignUp);
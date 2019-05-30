import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import SignUp from './sign_up';

const msp = (state) => ({
    errors: state.errors.session
});


const mdp = (dispatch) => ({
    signup: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
});


export default connect(msp, mdp)(SignUp);
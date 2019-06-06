import { connect } from 'react-redux';
import { login, signup, clearErrors } from '../../actions/session_actions';
import SignUp from './sign_up';

const msp = (state) => ({
    errors: state.errors.session
});


const mdp = (dispatch) => ({
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
});


export default connect(msp, mdp)(SignUp);
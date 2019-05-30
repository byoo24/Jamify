import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import Login from './login';

const msp = (state) => ({
    errors: state.errors.session
});


const mdp = (dispatch) => ({
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
});


export default connect(msp, mdp)(Login);
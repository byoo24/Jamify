import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { demoLogin } from '../../util/session_api_util';
import Login from './login';

const msp = (state) => ({
    errors: state.errors.session
});


const mdp = (dispatch) => ({
    login: user => dispatch(login(user)),
    demoLogin: () => dispatch(demoLogin())
});


export default connect(msp, mdp)(Login);
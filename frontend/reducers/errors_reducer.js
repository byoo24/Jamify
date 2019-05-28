import { combineReducers } from 'redux';
import sessionErrorReducer from './session/session_errors_reducer';


const errorsReducer = combineReducers({
    session: sessionErrorReducer
})

export default errorsReducer;
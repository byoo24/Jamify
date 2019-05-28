import { combineReducers } from 'redux';
import users from './session/users_reducer';


const entitiesReducer = combineReducers({
    users
})

export default entitiesReducer;
import {combineReducers} from 'redux';
// Redux forms
import {reducer as formReducer} from 'redux-form';
import authReducer from './authReducer';
export default combineReducers({
    authReducer,
    form: formReducer
});
import { combineReducers } from 'redux';
import {reducer as form} from 'redux-form';
import authReducer,{getMessages, getMessage} from './auth_reducer';



const rootReducer = combineReducers({
  form,
  auth:authReducer,
  msgs:getMessages,
  msg:getMessage
});

export default rootReducer;

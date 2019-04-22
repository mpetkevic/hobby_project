import {combineReducers} from  'redux';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import projectRegisterReducer from './projectRegisterReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  projectRegister: projectRegisterReducer
})

export default rootReducer;

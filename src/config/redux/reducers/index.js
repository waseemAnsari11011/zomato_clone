import {combineReducers} from 'redux';
import recordReducer from './recordReducer';
import authReducer from './authReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  records: recordReducer,
  auth: authReducer,
  cart: cartReducer,
});

export default rootReducer;

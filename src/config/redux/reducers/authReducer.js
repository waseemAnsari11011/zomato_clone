import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  // console.log('action', action.type);

  switch (action.type) {
    case LOGIN_REQUEST:
      return {...state, loading: true, error: null};
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loading: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload,
        loading: false,
      };
    case REGISTER_REQUEST:
      return {...state, loading: true, error: null};
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loading: false,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload,
        loading: false,
      };
    case LOGOUT_SUCCESS:
      return {...state, isAuthenticated: false, user: null};
    default:
      return state;
  }
};

export default authReducer;

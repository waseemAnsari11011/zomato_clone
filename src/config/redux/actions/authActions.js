import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../utils/api';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from './types';

export const login = (email, password) => async dispatch => {
  dispatch({type: LOGIN_REQUEST});
  console.log('cred', email, password);
  try {
    const response = await api.post('/auth/login', {email, password});
    const {access_token} = response.data;
    console.log('access_token--->', access_token);
    AsyncStorage.setItem('authToken', access_token);
    dispatch({type: LOGIN_SUCCESS, payload: {access_token}});
    return {success: true, message: 'Login success', data: access_token};
  } catch (error) {
    console.log('err==', error);
    dispatch({type: LOGIN_FAILURE, payload: {error}});
    return {success: false, message: 'Login failed', data: error};
  }
};

export const register = (email, password) => async dispatch => {
  dispatch({type: REGISTER_REQUEST});
  try {
    const response = await api.post('/auth/register', {email, password});
    const {access_token} = response.data;
    AsyncStorage.setItem('authToken', access_token);
    dispatch({type: REGISTER_SUCCESS, payload: {access_token}});
    return {success: true, message: 'register success', data: access_token};
  } catch (error) {
    dispatch({type: REGISTER_FAILURE, payload: {error}});
    return {success: false, message: 'register failed', data: error};
  }
};

export const logout = () => async dispatch => {
  dispatch({type: LOGOUT_REQUEST});
  try {
    await AsyncStorage.removeItem('authToken');
    dispatch({type: LOGOUT_SUCCESS});
  } catch (error) {
    dispatch({type: LOGOUT_FAILURE, payload: {error}});
  }
};

//This file exports action creators for logging in and logging out. It uses the Axios API client to make the API call and dispatches appropriate actions based on the response.

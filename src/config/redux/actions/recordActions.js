import api from '../../../utils/api';
import {
  FETCH_RECORDS_REQUEST,
  FETCH_RECORDS_SUCCESS,
  FETCH_RECORDS_FAILURE,
} from './types';

export const fetchRecords = () => {
  return async dispatch => {
    dispatch({type: FETCH_RECORDS_REQUEST});

    try {
      const response = await api.get('/food');
      // console.log('response--->', response);
      dispatch({type: FETCH_RECORDS_SUCCESS, payload: response.data});
    } catch (error) {
      console.log('err-->');
      dispatch({type: FETCH_RECORDS_FAILURE, payload: error.message});
    }
  };
};

//This file exports an action creator for fetching records. It uses the Axios API client to make the API call and dispatches appropriate actions based on the response.

import {
  FETCH_RECORDS_REQUEST,
  FETCH_RECORDS_SUCCESS,
  FETCH_RECORDS_FAILURE,
} from '../actions/types';

const initialState = {
  loading: false,
  records: [],
  error: null,
};

const recordReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECORDS_REQUEST:
      return {...state, loading: true};
    case FETCH_RECORDS_SUCCESS:
      return {...state, loading: false, records: action.payload};
    case FETCH_RECORDS_FAILURE:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

export default recordReducer;

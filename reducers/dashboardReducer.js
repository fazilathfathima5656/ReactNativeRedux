import {
  SAVE_Dashboard_DATA,
  SAVE_Home_DATA,
  LOADING,
  ON_ERROR,
} from '../Types/types';

const initialstate = {
  isLoading: false,
  dashboardData: {},
  homeData: {},
  error: '',
};

const dashboardReducer = (state = initialstate, action) => {
  switch (action.type) {
    case  SAVE_Dashboard_DATA:
      return {
        ...state,
        error: '',
        isLoading: false,
        dashboardData: action.data,
      };
    case SAVE_Home_DATA:
      return {
        ...state,
        error: '',
        isLoading: false,
        homeData: action.data,
      };
    case LOADING:
      return {
        ...state,
        isLoading: action.data,
      };
    case ON_ERROR:
      return {
        ...state,
        error: action.data,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default dashbaordReducer;

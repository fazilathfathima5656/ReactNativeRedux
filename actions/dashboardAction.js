import {
  SAVE_Dashboard_DATA,
  SAVE_Home_DATA,
  LOADING,
  ON_ERROR,
} from '../Types/types';
import { postDashboard, postHome } from './../controller/DashboardController';

export const saveDashboardData = DashbaordData => {
  return {
    type: SAVE_Dashboard_DATA,
    data: DashbaordData,
  };
};
export const saveHomeData = HomeData => {
  return {
    type: SAVE_Home_DATA,
    data: HomeData,
  };
};
export const fetchingData = loading => {
  return {
    type: LOADING,
    data: loading,
  };
};

export const onError = error => {
  return {
    type: ON_ERROR,
    data: error,
  };
};

export const postDashboardData = (DashbaordData, headers, callback) => {
  return dispatch => {
    dispatch(fetchingData(true));
    postDashbaord(DashbaordData, headers, (err, response) => {
      dispatch(fetchingData(false));
      if (err) {
        dispatch(onError(err));
      } else {
        dispatch(saveDashboardData(response));
      }
      callback(err);
    });
  };
};

export const postHomeData = (HomeData, headers, callback) => {
  return dispatch => {
    dispatch(fetchingData(true));
    postHome(HomeData, headers, (err, response) => {
      dispatch(fetchingData(false));
      if (err) {
        dispatch(fetchingData(false));
        dispatch(onError(err));
      } else {
        dispatch(saveHomeData(response));
      }
      callback(err);
    });
  };
};

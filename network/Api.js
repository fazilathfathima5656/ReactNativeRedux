import axios from 'axios';
import Strings from '@constants/Strings';

const API = {
  requesttimeout: 20000,

  getDefaultHeaders: () => {
    let defaultHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
    return defaultHeaders;
  },

  get: (route, headers, callback) => {
    return API.prepareConfig(route, null, 'get', headers, callback);
  },

  post: (route, params, headers, callback) => {
    return API.prepareConfig(route, params, 'post', headers, callback);
  },

  put: (route, params, headers, callback) => {
    return API.prepareConfig(route, params, 'put', headers, callback);
  },

  delete: (route, params, headers, callback) => {
    return API.prepareConfig(route, params, 'delete', headers, callback);
  },

  prepareConfig: async (routeurl, params, methodType, headers, callback) => {
    let config = {
      method: methodType,
      url: routeurl,
      data: params,
      headers: headers ? headers : API.getDefaultHeaders(),
      timeout: API.requesttimeout
    };
    API.call(config, callback);
  },

  /*
    * This method will take URL path as string for "routeurl"
    * params will take body: {key: value}, note: not stringify
    * Header:  {key: value}, note: not stringify
    * callback will give us two params (error, responseJson) so check for error not equal to null then process json
      else throw alert in your UI by using error parameter.
  */

  call: (config, callback) => {
    axios(config)
      .then(response => {
        callback(null, response.data);
      })
      .catch(error => {
        callback(API.validateErrors(error), null);
      });
  },

  validateErrors: error => {
    //This method is incremental improvements, in future if we want to handle
    // status code and messages every thing will go inside this method, currently
    // this is very minimal usage of this
    if (error.message === 'Network Error') {
      // Network Error means devices is offline not connected to internet axios will thorw this
      return Strings.network_error;
    }

    const { response } = error;
    if (response) {
      const { data } = response;
      const { message } = data;
      if (message) {
        return message;
      }
    }

    return error.message;
  }
};

module.exports = API;

import API from '@network/Api.js';
import Path from '@network/Paths.js';

export const postDashboard = (data, headers, callback) => {
  let customHeaders = API.getDefaultHeaders();
  API.post(Path, data, {...customHeaders, ...headers}, (err, res) => {
    callback(err, res);
  });
};

export const postHome = (data, headers, callback) => {
  let customHeaders = API.getDefaultHeaders();
  API.post(Path.login, data, {...customHeaders, ...headers}, (err, res) => {
    callback(err, res);
  });
};

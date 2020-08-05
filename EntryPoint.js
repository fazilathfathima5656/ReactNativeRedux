import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import Navigator from './Navigation/AppStack';

class Entrypoint extends Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
export default Entrypoint;

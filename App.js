import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import AppStack from './Navigation/AppStack';

class App extends Component {
  render() {
    return <AppStack />;
  }
}
export default App;
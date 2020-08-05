import {createAppContainer} from 'react-navigation';
import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import DashboardContainer from '../screens/DashboardContainer/DashboardContainer';
import HomeContainer from '../screens/HomeScreen/HomeContainer';

const AppStack = createStackNavigator(
  {
    DashboardContainer: {
      screen: DashboardContainer,
    },
    HomeContainer: {
      screen: HomeContainer,
    },
  },
  {
    initialRouteName: 'DashboardContainer',
  },
);
export default createAppContainer(AppStack);

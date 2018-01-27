import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import LoginScreen from './components/LoginScreen.js';
import DetailsScreen from './components/DetailsScreen.js';

import {
  StackNavigator,
} from 'react-navigation';

const RootNavigator = StackNavigator({
  Home: {
    screen: LoginScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      headerTitle: 'Details',
    },
  },
});

export default RootNavigator;

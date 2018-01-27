import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import HomeScreen from './components/HomeScreen.js';
import DetailsScreen from './components/DetailsScreen.js';

import {
  StackNavigator,
} from 'react-navigation';

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
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

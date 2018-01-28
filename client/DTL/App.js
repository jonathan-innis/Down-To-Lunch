import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import LoginScreen from './components/LoginScreen.js';
import TabNavigation from './components/TabNavigation.js';
import ProfileDisplay from './components/ProfileDisplay.js';

import {
  StackNavigator,
} from 'react-navigation';

const RootNavigator = StackNavigator({
  Home: {
    header: null,
    screen: LoginScreen,
  },
  Details: {
    screen: TabNavigation,
  },
  Profile: {
    screen: ProfileDisplay
  }
});

export default RootNavigator;

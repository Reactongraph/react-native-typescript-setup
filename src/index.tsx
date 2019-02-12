import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import DashboardScreen from './containers/Dashboard';
import LoginScreen from './containers/Login';
import SplashScreen from './containers/SplashScreen';

console.disableYellowBox = true;

const AppNavigator = StackNavigator(
  {
    Dashboard: { screen: DashboardScreen },
    Login: { screen: LoginScreen },
    Splash: { screen: SplashScreen },
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none',
  },
);

export default class App extends Component {
  render() {
    return (
        <AppNavigator />
    );
  }
}

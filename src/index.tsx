import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import DashboardScreen from 'src/containers/Dashboard';
import LoginScreen from 'src/containers/Login';
import SplashScreen from 'src/containers/SplashScreen';
import SignUpScreen from 'src/containers/SignUp';

console.disableYellowBox = true;

const AppNavigator = StackNavigator(
    {
        Dashboard: { screen: DashboardScreen },
        Login: { screen: LoginScreen },
        Splash: { screen: SplashScreen },
        SignUp: { screen: SignUpScreen }
    },
    {
        initialRouteName: 'Splash',
        headerMode: 'none'
    }
);

export default class App extends Component {
    render() {
        return <AppNavigator />;
    }
}

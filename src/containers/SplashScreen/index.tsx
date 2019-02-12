import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import Helper from 'src/utils/helper';
const helperFunctions = new Helper();

export default class SplashScreen extends Component {
  componentDidMount() {
    AsyncStorage.getItem('loginData').then((value) => {
      if (value) {
        helperFunctions.resetNavigation(this, "Dashboard", null);
      } else {
        helperFunctions.resetNavigation(this, "Login", null);
      }
    });
  }

  render() {
    return (
      <View />
    );
  }
}

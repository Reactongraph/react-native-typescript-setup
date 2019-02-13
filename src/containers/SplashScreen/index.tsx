import React, { Component } from 'react';
import { View } from 'react-native';
import Helper from 'src/utils/helper';
const helperFunctions = new Helper();

export default class SplashScreen extends Component {
  async componentDidMount() {
    const storedData = await helperFunctions.getLocalData('credential');
    if (storedData) {
      helperFunctions.resetNavigation(this, 'Dashboard', null);
    } else {
      helperFunctions.resetNavigation(this, 'Login', null);
    }
  }

  render() {
    return (
      <View />
    );
  }
}

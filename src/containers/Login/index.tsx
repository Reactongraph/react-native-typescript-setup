import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import Button from 'src/components/Button';
import  Helper from 'src/utils/helper';
import styles from './styles';

const helperFunctions = new Helper();

interface Props {
}

interface State {
  userName: String;
}

export default class Login extends Component<Props, State> {
  handleLogin = () => {
    helperFunctions.resetNavigation(this, "Dashboard", null);
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.handleLogin}
          style={styles.buttonWrapper}
          text="Login with facebook"
          buttonTextStyle={styles.buttonTextStyle}
        />
      </View>
    );
  }
}

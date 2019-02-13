import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from 'src/components/Button';
import Form from 'src/components/Form';
import  Helper from 'src/utils/helper';
import styles from './styles';

const helperFunctions = new Helper();

interface Props {
}
interface State {
  email: String,
  password: String,
}
export default class Login extends Component<Props, State> {

  state = {
    email: '',
    password: '',
  }

  handleSubmitForm = async () => {
    const { email, password } = this.state;
    if (email && password) {
      const storedData = await helperFunctions.getLocalData('credential');
      if (storedData.email === email && storedData.password === password) {
        helperFunctions.resetNavigation(this, 'Dashboard', null);
      } else {
        alert('Email or password is not correct.')
      }
    }
  }

  handleSignUp = () => {
    helperFunctions.resetNavigation(this, 'SignUp', null);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.screenTitle}>Login with App</Text>
        <Form 
          onEmailChangeText={(email) => this.setState({ email})}
          email={this.state.email}
          onPasswordChangeText={(password) => this.setState({ password })}
          onSubmit={this.handleSubmitForm}
          password={this.state.password}
          buttonText='Login'
        />
        <Button
          onPress={this.handleSignUp}
          style={styles.buttonContainer}
          text='Create a new account'
          buttonTextStyle={styles.buttonText}
        />
      </View>
    );
  }
}

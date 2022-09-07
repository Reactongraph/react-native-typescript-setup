import React, {useState} from 'react';
import {View, Text, AsyncStorage} from 'react-native';
import Button from '../../components/Button';
import Form from '../../components/Form';
import styles from './styles';

interface Props {}
interface State {
  email: String;
  password: String;
}
const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetNavigation = (navigation: any) => {
    props.navigation.navigate(navigation);
  };

  const storeData = async (key: string, data: string) => {
    try {
      await AsyncStorage.setItem(key, data);
    } catch (error) {
      console.warn(error);
    }
  };


  const getLocalData = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const handleSubmitForm = async () => {
    console.log('handleSubmitForm ');
    if (email && password) {
      const storedData = await getLocalData('credential');
      if (storedData.email === email && storedData.password === password) {
        storeData('isLoggedIn', 'true');
        resetNavigation('Dashboard');
      } else {
        alert('Email or password is not correct.');
      }
    }
  };

  const handleSignUp = () => {
    resetNavigation('SignUp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Login with App</Text>
      <Form
        onEmailChangeText={email => setEmail(email)}
        email={email}
        onPasswordChangeText={password => setPassword(password)}
        onSubmit={handleSubmitForm}
        password={password}
        buttonText="Login"
      />
      <Button
        onPress={handleSignUp}
        style={styles.buttonContainer}
        text="Create a new account"
        buttonTextStyle={styles.buttonText}
      />
    </View>
  );
};
export default Login;

import React, {useState} from 'react';
import {View, Text, AsyncStorage} from 'react-native';
import Button from '../../components/Button';
import Form from '../../components/Form';
import styles from '../../containers/Login/styles';

interface Props {}
interface State {
  email: String;
  password: String;
}

const Signup = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateData = (email: string, password: string) => {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email) === true && password.length > 5) {
      return true;
    }
    alert('Invalid email or password length is greater than 5');
    return false;
  };

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

  const handleSubmitForm = () => {
    if (validateData(email, password)) {
      const signUpData = {
        email,
        password,
      };
      storeData('credential', JSON.stringify(signUpData));
      resetNavigation('Dashboard');
    }
  };

  const handleLogin = () => {
    resetNavigation('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>SignUp with App</Text>
      <Form
        onEmailChangeText={email => setEmail(email)}
        email={email}
        onPasswordChangeText={password => setPassword(password)}
        onSubmit={handleSubmitForm}
        password={password}
        buttonText="SignUp"
      />
      <Button
        onPress={handleLogin}
        style={styles.buttonContainer}
        text="Already have Account"
        buttonTextStyle={styles.buttonText}
      />
    </View>
  );
};

export default Signup;

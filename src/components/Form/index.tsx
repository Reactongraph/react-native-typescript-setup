import * as React from 'react';
import { 
    View,
} from 'react-native';
import styles from './styles';
import Button from 'src/components/Button';
import InputField from 'src/components/InputFiled';

interface FormProps {
    onEmailChangeText: (email: String) => void,
    email: String,
    onPasswordChangeText: (password: String) => void,
    onSubmit: () => void,
    password: String,
    buttonText: String,
}

const Form: React.SFC<FormProps> = props => (
  <View style={styles.containerView}>
    <InputField
      style={styles.input}
      onChangeText={props.onEmailChangeText}
      value={props.email}
      keyboardType='email-address'
      placeholder='Email or Mobile Number'
    />
    <InputField
      onChangeText={props.onPasswordChangeText}
      value={props.password}
      style={styles.input}
      placeholder='Password'
      secureTextEntry
    />
    <Button
      onPress={props.onSubmit}
      style={styles.buttonContainer}
      text={props.buttonText}
      buttonTextStyle={styles.buttonText}
    />
  </View>
);

export default Form;

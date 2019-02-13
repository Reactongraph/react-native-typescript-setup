import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
 interface Button {
  onPress: () => void;
  style?: Object,
  buttonTextStyle: Object,
  text: String,
}

const Button: React.SFC<Button> = props => (
  <TouchableOpacity onPress={props.onPress} style={props.style}>
    <Text style={props.buttonTextStyle}>{props.text}</Text>
  </TouchableOpacity>
);

export default Button;

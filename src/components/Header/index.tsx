import React from 'react';
import { View, Text } from 'react-native';
import Button from '../Button';

interface Header {
  onPress: () => void;
  titleTextStyle: Object,
  wrapperStyle: Object,
  title: String,
  rightText: String,
}

const Header: React.SFC<Header> = props => (
  <View style={props.wrapperStyle}>
    <Text style={props.titleTextStyle}>{props.title}</Text>
    <Button
      onPress={props.onPress}
      text={props.rightText}
      buttonTextStyle={props.titleTextStyle}
    />
  </View>
);

export default Header;

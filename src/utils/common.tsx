import {Dimensions} from 'react-native';
// declare height width
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const common = {
  deviceHeight,
  deviceWidth,
  // colors
  darkGray: '#2c3e50',
  whiteColor: '#ffffff',
  redColor: '#FF0000',
  mediumGray: '#a8a8a8',
  lightBlueColor: '#2980b6',
};
export default common;

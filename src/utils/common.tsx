import { Dimensions } from 'react-native';
// declare height width
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const common =  {
  deviceHeight,
  deviceWidth,
  // colors

  fbColor: '#4267b2',
  whiteColor: '#ffffff',
  redColor: '#FF0000',
};
export default common;

import { StyleSheet } from 'react-native';
import Common from 'src/utils/common';

const styles = StyleSheet.create({
  containerView: {
    backgroundColor: 'gray'
  },
  container: {
    padding: 20
  },
  input: {
    height: 40,
    width: Common.deviceWidth - 100,
    backgroundColor: Common.mediumGray,
    marginBottom: 10,
    padding: 10,
    color: Common.whiteColor,
  },
  buttonContainer: {
    backgroundColor: Common.lightBlueColor,
    paddingVertical: 10
  },
  buttonText: {
    color: Common.whiteColor,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});


export default styles;

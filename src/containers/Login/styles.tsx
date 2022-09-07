import {StyleSheet} from 'react-native';
import Common from '../../utils/common';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Common.darkGray,
  },
  buttonWrapper: {
    backgroundColor: Common.darkGray,
    padding: 12,
  },
  buttonTextStyle: {
    color: Common.whiteColor,
  },
  buttonContainer: {
    marginTop: 20,
  },
  buttonText: {
    color: Common.whiteColor,
  },
  screenTitle: {
    marginBottom: 30,
    color: Common.whiteColor,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;

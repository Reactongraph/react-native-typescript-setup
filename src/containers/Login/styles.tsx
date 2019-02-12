import { StyleSheet } from 'react-native';
import Common from 'src/utils/common';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    backgroundColor: Common.fbColor,
    padding: 10,
  },
  buttonTextStyle: {
    color: Common.whiteColor,
  },
});

export default styles;

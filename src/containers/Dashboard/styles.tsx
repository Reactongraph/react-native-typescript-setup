import { StyleSheet } from 'react-native';
import Common  from 'src/utils/common';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapperStyle: {
    backgroundColor: Common.darkGray,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  titleTextStyle: {
    color: Common.whiteColor,
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: Common.deviceHeight - 100,
    width: Common.deviceWidth - 20,
    marginTop: 10,
    marginLeft: 10
  },
  imageDataView: {
    flex: 12
  }
});

export default styles;

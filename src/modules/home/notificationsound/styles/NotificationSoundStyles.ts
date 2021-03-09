import { ApplicationStyles, verticalScale } from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ...ApplicationStyles.general,
  ...ApplicationStyles.buttonAndLabel,
  btnSave: {
    marginBottom: verticalScale(30),
    marginTop: verticalScale(10)
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  flatListContainer: {
    height: '100%',
    width: '100%'
  },
  lineView: {
    height: verticalScale(1),
    width: '100%'
  }
});

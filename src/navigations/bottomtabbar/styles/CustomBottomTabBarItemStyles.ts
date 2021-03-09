import { moderateScale, verticalScale } from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  bottomTabBarItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: verticalScale(10)
  },
  bottomTabBarItemText: {
    fontSize: moderateScale(12),
    marginTop: verticalScale(5)
  }
});

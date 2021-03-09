import { Fonts } from '@assets';
import { horizontalScale, moderateScale, verticalScale } from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  bottomDrawerSection: {
    marginBottom: verticalScale(15)
  },
  drawerContent: {
    flex: 1
  },
  drawerItemText: {
    fontFamily: Fonts.heavy,
    fontSize: moderateScale(14),
    marginLeft: horizontalScale(-20)
  },
  drawerSection: {
    marginTop: verticalScale(15)
  }
});

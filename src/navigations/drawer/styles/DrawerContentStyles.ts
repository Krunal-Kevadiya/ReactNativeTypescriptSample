import { Fonts } from '@assets';
import { horizontalScale, moderateScale, statusBarHeight, verticalScale } from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  bottomDrawerSection: {
    marginBottom: verticalScale(15)
  },
  drawerContainer: { paddingTop: 0 },
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
  },
  drawerStyle: { marginTop: statusBarHeight() }
});

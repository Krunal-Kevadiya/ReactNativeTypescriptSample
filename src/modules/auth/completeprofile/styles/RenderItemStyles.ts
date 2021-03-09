import { Fonts } from '@assets';
import { moderateScale, verticalScale } from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  actionSheetItem: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(14),
    paddingVertical: verticalScale(10)
  }
});

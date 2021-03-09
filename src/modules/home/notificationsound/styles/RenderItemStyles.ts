import { Fonts } from '@assets';
import { horizontalScale, moderateScale, verticalScale } from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  actionSheetItem: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(14),
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(12)
  }
});

import { Fonts } from '@assets';
import { horizontalScale, moderateScale, verticalScale } from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  preferenceItemText: {
    fontFamily: Fonts.regular,
    fontSize: moderateScale(14)
  },
  preferenceView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(18),
    paddingVertical: verticalScale(8)
  }
});

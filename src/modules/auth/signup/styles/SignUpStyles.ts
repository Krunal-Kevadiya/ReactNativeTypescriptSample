import { Fonts } from '@assets';
import { ApplicationStyles, moderateScale, verticalScale } from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ...ApplicationStyles.general,
  ...ApplicationStyles.headerAndFooter,
  ...ApplicationStyles.buttonAndLabel,
  textAlreadyAccount: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(16),
    marginTop: verticalScale(70),
    textAlign: 'center'
  }
});

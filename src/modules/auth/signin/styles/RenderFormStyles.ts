import { Fonts } from '@assets';
import { ApplicationStyles, moderateScale, verticalScale } from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ...ApplicationStyles.buttonAndLabel,
  form: {
    marginTop: verticalScale(50)
  },
  textInput: {
    flex: 1,
    fontFamily: Fonts.regular,
    fontSize: moderateScale(16)
  }
});

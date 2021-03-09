import { Fonts } from '@assets';
import { ApplicationStyles, moderateScale, verticalScale } from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ...ApplicationStyles.buttonAndLabel,
  form: {
    marginTop: verticalScale(30)
  },
  signUpDesc: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(16),
    marginBottom: verticalScale(10),
    textAlign: 'center'
  },
  textInput: {
    flex: 1,
    fontFamily: Fonts.regular,
    fontSize: moderateScale(16),
    marginTop: verticalScale(10)
  }
});

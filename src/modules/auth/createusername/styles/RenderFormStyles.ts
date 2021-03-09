import { Fonts } from '@assets';
import { ApplicationStyles, moderateScale, verticalScale } from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ...ApplicationStyles.buttonAndLabel,
  btnNext: {
    marginTop: verticalScale(25)
  },
  form: {
    marginTop: verticalScale(30)
  },
  textCreateUserNameDesc: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(17),
    marginBottom: verticalScale(25),
    textAlign: 'center'
  },
  textInput: {
    flex: 1,
    fontFamily: Fonts.regular,
    fontSize: moderateScale(16)
  }
});

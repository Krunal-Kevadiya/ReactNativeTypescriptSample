import { Fonts } from '@assets';
import { ApplicationStyles, horizontalScale, moderateScale, verticalScale } from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ...ApplicationStyles.buttonAndLabel,
  form: {
    marginTop: verticalScale(30)
  },
  spinnerRetry: {
    alignSelf: 'flex-end',
    height: 'auto'
  },
  textInput: {
    height: verticalScale(70),
    width: '100%'
  },
  textRetry: {
    fontFamily: Fonts.regular,
    fontSize: moderateScale(14),
    textAlign: 'right'
  },
  textVerifyDesc: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(17),
    textAlign: 'center'
  },
  underlineStyleBase: {
    borderBottomWidth: verticalScale(1),
    borderWidth: 0,
    fontFamily: Fonts.boldItalic,
    fontSize: moderateScale(20),
    height: verticalScale(40),
    width: horizontalScale(40)
  }
});

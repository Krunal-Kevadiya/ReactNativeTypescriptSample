import { Fonts } from '@assets';
import { ApplicationStyles, moderateScale, verticalScale } from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ...ApplicationStyles.buttonAndLabel,
  btnContinue: {
    marginTop: verticalScale(25)
  },
  form: {
    marginTop: verticalScale(30)
  },
  imageUpload: {
    alignSelf: 'center',
    height: moderateScale(24),
    width: moderateScale(24)
  },
  profileAvatar: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: moderateScale(5),
    height: moderateScale(120),
    justifyContent: 'center',
    width: moderateScale(120)
  },
  textCompleteProfileDesc: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(17),
    marginBottom: verticalScale(25),
    textAlign: 'center'
  },
  textEditPhoto: {
    fontFamily: Fonts.regular,
    fontSize: moderateScale(14),
    marginTop: verticalScale(5),
    textAlign: 'center'
  },
  textInput: {
    flex: 1,
    fontFamily: Fonts.regular,
    fontSize: moderateScale(16)
  }
});

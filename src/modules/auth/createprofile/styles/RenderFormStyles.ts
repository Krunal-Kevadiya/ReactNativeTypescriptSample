import { Fonts } from '@assets';
import { ApplicationStyles, moderateScale, verticalScale } from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ...ApplicationStyles.buttonAndLabel,
  btnChangePhoto: {
    marginTop: verticalScale(15)
  },
  btnNext: {
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
  textCreateProfileDesc: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(17),
    marginBottom: verticalScale(25),
    textAlign: 'center'
  }
});

import { Fonts } from '@assets';
import { ApplicationStyles, horizontalScale, moderateScale, verticalScale, windowHeight, windowWidth } from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ...ApplicationStyles.general,
  ...ApplicationStyles.headerAndFooter,
  button: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: verticalScale(80)
  },
  buttonContainer: {
    borderRadius: horizontalScale(20),
    height: verticalScale(40),
    width: horizontalScale(150)
  },
  containerGetStarted: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  footers: {
    flex: 1
  },
  headers: {
    alignItems: 'center',
    flex: 1.5,
    justifyContent: 'center'
  },
  logo: {
    height: windowWidth * 0.28,
    width: windowHeight * 0.28
  },
  text: {
    fontFamily: Fonts.heavyItalic,
    fontSize: moderateScale(16),
    marginTop: verticalScale(8)
  },
  textGetStarted: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(14)
  },
  title: {
    fontFamily: Fonts.boldItalic,
    fontSize: moderateScale(24),
    marginTop: verticalScale(50)
  }
});

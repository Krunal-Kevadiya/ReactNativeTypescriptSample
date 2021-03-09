import { Fonts } from '@assets';
import { moderateScale, verticalScale } from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  errorMsg: {
    fontFamily: Fonts.regular,
    fontSize: moderateScale(14),
    marginTop: verticalScale(5)
  },
  inputContainer: {
    borderBottomWidth: verticalScale(1),
    flexDirection: 'row',
    marginTop: verticalScale(10),
    paddingBottom: verticalScale(6)
  },
  line: {
    height: verticalScale(0.3),
    width: '100%'
  },
  textLabel: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(14),
    marginTop: verticalScale(10)
  }
});

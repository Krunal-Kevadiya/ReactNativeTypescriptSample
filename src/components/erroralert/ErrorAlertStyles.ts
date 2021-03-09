import { Fonts } from '@assets';
import { horizontalScale, moderateScale, verticalScale } from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  absoluteView: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  contentContainerStyle: {
    alignItems: 'center',
    borderRadius: horizontalScale(10),
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: horizontalScale(15),
    minHeight: verticalScale(70),
    paddingHorizontal: horizontalScale(15)
  },
  imageStyle: {
    height: horizontalScale(24),
    resizeMode: 'contain',
    width: horizontalScale(24)
  },
  messageStyle: {
    flex: 1,
    fontFamily: Fonts.bold,
    fontSize: moderateScale(14),
    paddingRight: horizontalScale(5),
    textAlign: 'center'
  }
});

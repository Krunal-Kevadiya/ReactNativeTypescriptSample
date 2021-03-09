import { Fonts } from '@assets';
import { moderateScale } from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  centerSide: {
    left: 0,
    position: 'absolute',
    right: 0
  },
  imageTitle: {
    alignSelf: 'center'
  },
  textTitle: {
    fontFamily: Fonts.semibold,
    fontSize: moderateScale(16),
    textAlign: 'center'
  }
});

import { Fonts } from '@assets';
import { horizontalScale, moderateScale } from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  bothSide: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: horizontalScale(15)
  },
  textLabel: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(16)
  }
});

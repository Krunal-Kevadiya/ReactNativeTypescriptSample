import { Fonts } from '@assets';
import { horizontalScale, moderateScale } from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  sectionLine: {
    height: 0.3,
    width: '100%'
  },
  textSection: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(14),
    paddingHorizontal: horizontalScale(8),
    paddingTop: horizontalScale(8)
  }
});

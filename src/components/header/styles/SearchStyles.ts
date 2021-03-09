import { Fonts } from '@assets';
import { horizontalScale, moderateScale, verticalScale } from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  centerSide: {
    bottom: 0,
    height: verticalScale(40),
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  inputSearch: {
    flex: 1,
    fontFamily: Fonts.semibold,
    fontSize: moderateScale(14),
    paddingHorizontal: horizontalScale(10)
  },
  line: {
    height: verticalScale(0.3),
    width: '100%'
  },
  searchContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(10)
  },
  textLabel: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(14)
  }
});

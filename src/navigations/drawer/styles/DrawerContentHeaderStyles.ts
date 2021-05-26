import { Fonts } from '@assets';
import { horizontalScale, moderateScale, verticalScale } from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  profileAvatar: {
    borderRadius: horizontalScale(5),
    height: horizontalScale(60),
    width: horizontalScale(60)
  },
  profileNameView: {
    flexDirection: 'column',
    marginLeft: horizontalScale(15)
  },
  rowView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: verticalScale(20)
  },
  sectionView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: horizontalScale(15)
  },
  textCount: {
    fontFamily: Fonts.heavy,
    marginRight: horizontalScale(3)
  },
  textSubTitle: {
    fontFamily: Fonts.regular,
    fontSize: moderateScale(14)
  },
  textUserName: {
    fontFamily: Fonts.bold,
    fontSize: moderateScale(16),
    marginTop: verticalScale(3)
  },
  userInfoSection: {
    paddingLeft: horizontalScale(20)
  },
  userProfileView: {
    alignItems: 'center',
    flexDirection: 'row'
  }
});

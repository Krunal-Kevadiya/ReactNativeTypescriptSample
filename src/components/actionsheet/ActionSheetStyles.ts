import { Fonts } from '@assets';
import { horizontalScale, moderateScale, verticalScale } from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  absoluteCustomBackdrop: {
    left: 0,
    opacity: 0.7,
    position: 'absolute',
    right: 0,
    top: 0
  },
  containerViewStyle: {
    alignItems: 'center',
    marginBottom: verticalScale(20),
    width: '100%'
  },
  customBackdrop: {
    flex: 1
  },
  list: {
    width: '100%'
  },
  messageText: {
    fontFamily: Fonts.medium,
    fontSize: moderateScale(12),
    marginBottom: verticalScale(10),
    textAlign: 'center'
  },
  popupContainerStyle: {
    alignItems: 'center',
    borderTopLeftRadius: horizontalScale(15),
    borderTopRightRadius: horizontalScale(15),
    paddingHorizontal: horizontalScale(20),
    paddingTop: verticalScale(20),
    width: '100%'
  },
  popupDismissLine: {
    alignSelf: 'center',
    borderRadius: horizontalScale(2.5),
    height: horizontalScale(5),
    marginBottom: verticalScale(10),
    opacity: 0.5,
    width: horizontalScale(55)
  },
  popupStyle: {
    alignItems: 'flex-end',
    height: '93%',
    justifyContent: 'flex-end',
    width: '100%'
  },
  popupView: {
    height: '100%',
    justifyContent: 'flex-end',
    marginHorizontal: 0,
    margin: 0,
    width: '100%'
  },
  titleText: {
    fontFamily: Fonts.boldItalic,
    fontSize: moderateScale(16),
    marginBottom: verticalScale(10),
    textAlign: 'center'
  }
});

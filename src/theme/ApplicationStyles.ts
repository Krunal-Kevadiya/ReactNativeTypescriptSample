import { Fonts } from '@assets';
import { StyleSheet } from 'react-native';
import { horizontalScale, moderateScale, verticalScale, windowWidth } from './Metrics';

export const ApplicationStyles = {
  general: StyleSheet.create({
    screen: {
      flex: 1
    }
  }),
  // Header & Footer
  headerAndFooter: StyleSheet.create({
    footer: {
      borderTopLeftRadius: horizontalScale(30),
      borderTopRightRadius: horizontalScale(30),
      flex: 3,
      paddingHorizontal: horizontalScale(20)
    },
    header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: horizontalScale(20)
    },
    textHeader: {
      fontFamily: Fonts.heavyItalic,
      fontSize: moderateScale(30),
      marginBottom: verticalScale(30)
    }
  }),
  // Button & Label
  buttonAndLabel: StyleSheet.create({
    buttonBorderStyle: {
      borderRadius: horizontalScale(10),
      borderStyle: 'solid',
      borderWidth: verticalScale(2)
    },
    buttonContainer: {
      flex: 0
    },
    buttonMargin: {
      marginTop: verticalScale(15)
    },
    spinnerButton: {
      borderRadius: horizontalScale(10),
      height: verticalScale(45),
      width: windowWidth - horizontalScale(40)
    },
    textLabel: {
      fontFamily: Fonts.boldItalic,
      fontSize: moderateScale(18)
    }
  })
};

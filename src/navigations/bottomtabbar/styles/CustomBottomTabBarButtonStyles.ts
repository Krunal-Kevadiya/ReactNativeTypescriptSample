import { horizontalScale, verticalScale } from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  bottomTabBarButtonContainer: {
    alignItems: 'center',
    borderRadius: horizontalScale(5),
    bottom: verticalScale(30),
    height: horizontalScale(70),
    justifyContent: 'center',
    transform: [{ rotate: '45deg' }],
    width: horizontalScale(70),
    zIndex: 10
  },
  bottomTabBarView: {
    alignItems: 'center',
    borderRadius: horizontalScale(5),
    borderWidth: horizontalScale(1.5),
    bottom: verticalScale(20),
    height: horizontalScale(60),
    justifyContent: 'center',
    left: horizontalScale(5),
    position: 'absolute',
    right: 0,
    shadowOffset: { width: horizontalScale(2), height: 0 },
    shadowOpacity: 5.0,
    shadowRadius: horizontalScale(2),
    textShadowOffset: { width: horizontalScale(5), height: verticalScale(5) },
    textShadowRadius: horizontalScale(10),
    top: verticalScale(5),
    transform: [{ rotate: '270deg' }],
    width: horizontalScale(60)
  }
});

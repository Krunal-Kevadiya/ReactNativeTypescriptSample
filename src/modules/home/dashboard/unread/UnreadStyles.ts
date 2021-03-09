import { ApplicationStyles, horizontalScale } from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ...ApplicationStyles.general,
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  inviteBtn: {
    borderRadius: horizontalScale(5),
    height: horizontalScale(26),
    width: horizontalScale(26)
  }
});

import { ApplicationStyles, windowWidth } from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ...ApplicationStyles.general,
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  spinner: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    overflow: 'hidden',
    position: 'absolute',
    right: 0,
    top: 0
  },
  webview: {
    height: '100%',
    width: windowWidth
  }
});

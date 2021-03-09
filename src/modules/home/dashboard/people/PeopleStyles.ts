import { ApplicationStyles } from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ...ApplicationStyles.general,
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});

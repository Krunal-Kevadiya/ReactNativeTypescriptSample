import { combineReducers } from '@reduxjs/toolkit';
import { reducer as NetworkReducer } from 'react-native-offline';
import { ThemeReducer } from './ThemeRedux';

export { ThemeActions, ThemeSelectors } from './ThemeRedux';

export { getStroage } from './utils';

export default combineReducers({
  theme: ThemeReducer,
  network: NetworkReducer
});

import { combineReducers } from 'redux';
import { reducer as networkReducer } from 'react-native-offline';
import { themeReducer } from './reducer/ThemeReducer';

export { ThemeActions, ThemeTypes, ThemeSelectors } from './actor/ThemeActionSelectorAndState';

export { getStroage } from './utils';

export default combineReducers({
  theme: themeReducer,
  network: networkReducer
});

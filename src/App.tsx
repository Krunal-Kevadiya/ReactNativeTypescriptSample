import { ErrorAlert, ErrorAlertHolder } from '@components';
import { generateColors } from '@constants';
import { useI18nLanguage } from '@hooks';
import { AppNavigator } from '@navigations';
import { ApplicationStyles, Colors } from '@theme';
import { setI18nConfig } from '@utils';
import React, { useEffect } from 'react';
import { LogBox, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './datas/reduxs/Store';
import './utils/StringUtil';

export default function App(): React.ReactElement {
  useI18nLanguage();
  LogBox.ignoreAllLogs(true);

  useEffect(() => {
    const { colors } = Colors(true);
    generateColors(colors.primary);
    generateColors(colors.secondary);
    generateColors(colors.orange);
    generateColors(colors.blue);
    generateColors(colors.gray);
    setI18nConfig();
  }, []);

  return (
    <View style={ApplicationStyles.general.screen}>
      <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
          <AppNavigator />
        </PersistGate>
        <ErrorAlert ref={(ref) => ErrorAlertHolder.setDropDown(ref)} />
      </Provider>
    </View>
  );
}

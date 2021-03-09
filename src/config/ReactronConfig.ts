import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeModules } from 'react-native';
import apisaucePlugin from 'reactotron-apisauce';
import Reactotron from 'reactotron-react-native';
import ReactotronFlipper from 'reactotron-react-native/dist/flipper';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (__DEV__) {
  let packagerHostname = 'localhost';

  const { scriptURL } = NativeModules.SourceCode;
  // eslint-disable-next-line prefer-destructuring
  packagerHostname = scriptURL.split('://')[1].split(':')[0];

  Reactotron.setAsyncStorageHandler!(AsyncStorage);
  Reactotron.configure({ name: 'yac', host: packagerHostname, createSocket: (path) => new ReactotronFlipper(path) });

  // Reactotron.useReactNative({
  //   asyncStorage: { ignore: ['secret'] }
  // });
  Reactotron.use(reactotronRedux());
  Reactotron.use(apisaucePlugin());
  Reactotron.use(sagaPlugin({ except: [''] }));

  Reactotron.connect();
  Reactotron.clear!();
}
const sagaMonitor = __DEV__ ? Reactotron.createSagaMonitor!() : undefined;
const sagaEnhancers = __DEV__ ? Reactotron.createEnhancer!() : undefined;

export { sagaMonitor, sagaEnhancers };

import { all, fork } from 'redux-saga/effects';
import { networkSaga } from 'react-native-offline';
import { ConnectivityArgs } from 'react-native-offline/dist/src/types';

const networkConfig: ConnectivityArgs = {
  pingTimeout: 10000,
  pingServerUrl: 'https://www.google.com/',
  shouldPing: true,
  pingInterval: 1000,
  pingOnlyIfOffline: true,
  pingInBackground: false,
  httpMethod: 'HEAD'
};

export default function* rootSaga() {
  yield all([fork(networkSaga, networkConfig)]);
}

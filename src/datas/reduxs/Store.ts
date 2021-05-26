import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootSaga from '../sagas';
import rootReducer from './index';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: '@Yac',
  version: 1,
  storage: AsyncStorage,
  blacklist: ['nav', 'navigation']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewares = [
  ...getDefaultMiddleware({
    thunk: false,
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }),
  sagaMiddleware
];
if (__DEV__) {
  const logger = require('redux-logger').default;
  const loggerMiddleware = require('./middleware/logger').default;
  middlewares.push(loggerMiddleware);
  middlewares.push(logger);
}

const enhancers = [applyMiddleware(...middlewares)];
if (__DEV__) {
  const monitorReducersEnhancer = require('./enhancers/monitorReducer').default;
  enhancers.push(monitorReducersEnhancer);
}

const store = configureStore({
  reducer: persistedReducer,
  devTools: __DEV__,
  middleware: middlewares,
  enhancers
});

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootStateType = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatchType = typeof store.dispatch;

// Enable persistence
export default { store, persistor };

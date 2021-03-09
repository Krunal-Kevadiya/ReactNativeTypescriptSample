import { RootStateType } from './Store';

export function getStroage(): RootStateType {
  return require('./Store').default.store.getState();
}

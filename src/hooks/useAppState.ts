import { isAndroid } from '@theme';
import { useEffect, useState } from 'react';
import { AppState, AppStateStatus } from 'react-native';

type UseAppStatePropsType = {
  onChange?: (status: AppStateStatus) => void;
  onForeground?: () => void;
  onBackground?: () => void;
};

export function useAppState(settings?: UseAppStatePropsType): AppStateStatus {
  const { onChange, onForeground, onBackground } = settings || {};
  const [firstTime, setFirstTime] = useState(isAndroid);
  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (nextAppState === 'active' && appState !== 'active') {
        onForeground?.();
      } else if (appState === 'active' && nextAppState.match(/inactive|background/)) {
        onBackground?.();
      }
      setAppState(nextAppState);
      onChange?.(nextAppState);
    };

    AppState.addEventListener('change', handleAppStateChange);
    return () => AppState.removeEventListener('change', handleAppStateChange);
  }, [onChange, onForeground, onBackground, appState]);

  useEffect(() => {
    if (firstTime) {
      setFirstTime(false);
      onForeground?.();
    }
  }, [firstTime, onForeground]);

  return appState;
}

import { ThemeActions, ThemeSelectors } from '@reduxs';
import { Colors } from '@theme';
import { useEffect } from 'react';
import { Appearance } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useAsyncStorage } from '../useAsyncStorage';

export function useMyTheme() {
  const dispatch = useDispatch();
  const theme = useSelector(ThemeSelectors.getTheme); // Get theme from redux state using the useSelector hook
  const [storageValue] = useAsyncStorage<boolean | null>('Dark Theme', null);

  /* Dispatch an action when theme is changed */
  function onThemeChange({ colorScheme }: any): void {
    // Receive the colorScheme property
    // We need to dispatch an action to set the theme in the store
    dispatch(ThemeActions.changeTheme(Colors(colorScheme === 'dark')));
  }

  /* Add event listener when component is first rendered. Remove when component is unmounted */
  useEffect(() => {
    /* When component is first loaded, dispatch an action to store the value on the Redux state */
    dispatch(ThemeActions.changeTheme(Colors(storageValue || Appearance.getColorScheme() === 'dark')));
    Appearance.addChangeListener(onThemeChange);
    return () => Appearance.removeChangeListener(onThemeChange);
  }, [storageValue]);

  return { theme };
}

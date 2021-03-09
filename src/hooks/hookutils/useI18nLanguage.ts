import { setI18nConfig } from '@utils';
import { useEffect } from 'react';
import * as RNLocalize from 'react-native-localize';
import RNRestart from 'react-native-restart';

export function useI18nLanguage() {
  function onLocalizationChange(): void {
    setI18nConfig().then(() => {
      RNRestart.Restart();
    });
  }

  useEffect(() => {
    RNLocalize.addEventListener('change', onLocalizationChange);
    return () => RNLocalize.removeEventListener('change', onLocalizationChange);
  }, []);
}

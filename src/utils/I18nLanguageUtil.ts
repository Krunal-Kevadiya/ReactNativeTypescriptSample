import i18n from 'i18n-js';
import memoize from 'lodash.memoize';
import * as RNLocalize from 'react-native-localize';
import { MockData } from '@assets';

const translationGetters = {
  en: () => MockData.enLanguage
  // nl: () => MockData.nlLanguage
};

export const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key)
);

export const setI18nConfig = async () => {
  // fallback if no available language fits
  const fallback = { languageTag: 'en' };
  const { languageTag } = RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) || fallback;
  // clear translation cache
  translate.cache.clear();
  // set i18n-js config
  i18n.translations = { [languageTag]: translationGetters[languageTag]() };
  i18n.locale = languageTag;
};

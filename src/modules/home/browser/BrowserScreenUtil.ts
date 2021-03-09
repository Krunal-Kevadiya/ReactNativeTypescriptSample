import { AppConsts, BrowserStrings } from '@constants';

export function getScreenTitle(url: string) {
  if (url === AppConsts.privacyPolicy) {
    return BrowserStrings.titlePrivacy;
  }
  if (url === AppConsts.termsConditions) {
    return BrowserStrings.titleTerms;
  }
  return '';
}

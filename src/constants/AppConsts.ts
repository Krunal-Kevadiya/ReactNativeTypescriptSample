const ENVIRONMENT = 'prod';
const CONFIG = {
  stage: {
    segmentKey: 'gGgSGU7znMPFzjDxTm5XI6ykwiTRJSGx',
    sentryUrl: 'https://32ffca5e36964f57b71ed72afeebb052@sentry.io/1757859',
    apiUrl: 'https://stagging-api.yacchat.com/api'
  },
  dev: {
    segmentKey: 'gGgSGU7znMPFzjDxTm5XI6ykwiTRJSGx',
    sentryUrl: 'https://32ffca5e36964f57b71ed72afeebb052@sentry.io/1757859',
    apiUrl: 'http://qa-api.yacchat.com/api'
  },
  prod: {
    segmentKey: 'gGgSGU7znMPFzjDxTm5XI6ykwiTRJSGx',
    sentryUrl: 'https://32ffca5e36964f57b71ed72afeebb052@sentry.io/1757859',
    apiUrl: 'https://api-v3.yacchat.com/api'
  }
};

const { apiUrl, sentryUrl, segmentKey } = CONFIG[ENVIRONMENT];

const appVersion = 'v4.1(227 CP:24-May)';
const privacyPolicy = 'https://app.yac.com/privacy-policy/';
const termsConditions = 'https://app.yac.com/terms/';

export const AppConsts = {
  mobile: 'Mobile',
  sentryUrl,
  segmentKey,
  apiUrl,
  privacyPolicy,
  termsConditions,
  appVersion
};

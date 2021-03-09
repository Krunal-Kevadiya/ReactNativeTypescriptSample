import { translate } from '@utils';

export const WelcomeStrings = {
  title: translate('titleWelcome'),
  desc: translate('descWelcome'),
  btnGetStarted: translate('btnGetStarted')
};

export const SignInStrings = {
  title: translate('titleSignIn'),
  inputEmail: translate('inputEmail'),
  btnContinue: translate('btnContinue'),
  notYacYet: translate('notYacYet'),
  btnSignUp: translate('btnSignUp')
};

export const SignUPStrings = {
  title: translate('titleSignUp'),
  desc: translate('descSignUp'),
  alreadyAccount: translate('alreadyAccount'),
  btnSignIn: translate('btnSignIn'),
  inputName: translate('inputName'),
  inputEmail: translate('inputEmail'),
  inputUserName: translate('inputUserName'),
  btnContinue: translate('btnContinue')
};

export const VerifyStrings = {
  title: translate('titleVerify'),
  desc: translate('descVerify'),
  btnVerifyCode: translate('btnVerifyCode'),
  retry: translate('retryEmail')
};

export const CreateProfileStrings = {
  title: translate('titleCreateProfile'),
  desc: translate('descCreateProfile'),
  btnNext: translate('btnNext'),
  btnChangePhoto: translate('btnChangePhoto'),
  textSelectAPhoto: translate('textSelectAPhoto'),
  listSelectAPhoto: translate('listSelectAPhoto')
};

export const CreateUserNameStrings = {
  title: translate('titleCreateProfile'),
  desc: translate('descCreateUsername'),
  inputUserName: translate('inputUserName'),
  btnNext: translate('btnNext'),
  available: translate('availableUsername'),
  unavailable: translate('unavailableUsername')
};

export const CompleteProfileStrings = {
  title: translate('titleCompleteProfile'),
  desc: translate('descCompleteProfile'),
  editPhoto: translate('editPhoto'),
  inputUserName: translate('inputUserName'),
  btnContinue: translate('btnContinue'),
  available: translate('availableUsername'),
  unavailable: translate('unavailableUsername'),
  textSelectAPhoto: translate('textSelectAPhoto'),
  listSelectAPhoto: translate('listSelectAPhoto')
};

export const BrowserStrings = {
  titlePrivacy: translate('titlePrivacy'),
  titleTerms: translate('titleTerms')
};

export const NotificationStrings = {
  title: translate('titleNotificationSound'),
  btnSave: translate('btnSave')
};

export const RegexStrings = {
  stringArgFormat: /(?:{{)|(?:}})/g,
  stringArg: /((?:[^{}]|(?:\{\{)|(?:\}\}))+)|(?:\{([0-9]+)\})/g,
  stringFormat: /^(?:(?:(?:[^{}]|(?:\{\{)|(?:\}\}))+)|(?:\{[0-9]+\}))+$/,
  phoneRegExp:
    /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/,
  nameRegExp: /[a-zA-Z0-9 À-ÖØ-öø-ÿ]{3,30}/,
  userNameRegExp: /^[a-z0-9#_.-]{3,30}$/,
  numberRegExp: /^\d+$/
};

export const OtherStrings = {
  yupSchemasInvalid: translate('yupSchemasInvalid'),
  yupEmptyDetail: translate('yupEmptyDetail')
};

export const ValidationStrings = {
  emptyEmailOrPhone: translate('emptyEmailOrPhone'),
  requireEmailOrPhone: translate('requireEmailOrPhone'),
  emptyName: translate('emptyName'),
  requireName: translate('requireName'),
  minName: translate('minName'),
  emptyUsername: translate('emptyUsername'),
  requireUsername: translate('requireUsername'),
  minUsername: translate('minUsername'),
  emptyOtp: translate('emptyOtp'),
  requireOtp: translate('requireOtp'),
  minOtp: translate('minOtp'),
  requireProfile: translate('requireProfile')
};

export const DrawerBottomBarStrings = {
  home: translate('home'),
  editProfile: translate('editProfile'),
  transcriptionLanguage: translate('transcriptionLanguage'),
  help: translate('help'),
  privacyPolicy: translate('privacyPolicy'),
  termsAndConditions: translate('termsAndConditions'),
  notificationSound: translate('notificationSound'),
  pushNotification: translate('pushNotification'),
  autoPlay: translate('autoPlay'),
  swipeToReplyAll: translate('swipeToReplyAll'),
  disablePreview: translate('disablePreview'),
  optOutAnalytics: translate('optOutAnalytics'),
  darkTheme: translate('darkTheme'),
  signOut: translate('signOut'),
  unread: translate('unread'),
  all: translate('all'),
  dMs: translate('dMs'),
  channels: translate('channels')
};

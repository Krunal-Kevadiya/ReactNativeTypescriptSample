import { Dimensions, NativeModules, Platform } from 'react-native';

const { StatusBarManager } = NativeModules;

export const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export const isAndroid: boolean = Platform.OS === 'android';
export const isIos: boolean = Platform.OS === 'ios';

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth: number = 375;
const guidelineBaseHeight: number = 812;

export function horizontalScale(size: number) {
  return (windowWidth / guidelineBaseWidth) * size;
}
export function verticalScale(size: number) {
  return (windowHeight / guidelineBaseHeight) * size;
}
export function moderateScale(size: number, factor: number = 0.5) {
  return size + (horizontalScale(size) - size) * factor;
}

// For status bar
const STATUSBAR_DEFAULT_HEIGHT = 25;
const STATUSBAR_X_HEIGHT = 44;
const STATUSBAR_IP12_HEIGHT = 47;
const STATUSBAR_IP12MAX_HEIGHT = 47;

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const IP12_WIDTH = 390;
const IP12_HEIGHT = 844;

const IP12MAX_WIDTH = 428;
const IP12MAX_HEIGHT = 926;

let statusBarHeights = STATUSBAR_DEFAULT_HEIGHT;
if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS) {
  if (windowWidth === X_WIDTH && windowHeight === X_HEIGHT) {
    statusBarHeights = STATUSBAR_X_HEIGHT;
  } else if (windowWidth === XSMAX_WIDTH && windowHeight === XSMAX_HEIGHT) {
    statusBarHeights = STATUSBAR_X_HEIGHT;
  } else if (windowWidth === IP12_WIDTH && windowHeight === IP12_HEIGHT) {
    statusBarHeights = STATUSBAR_IP12_HEIGHT;
  } else if (windowWidth === IP12MAX_WIDTH && windowHeight === IP12MAX_HEIGHT) {
    statusBarHeights = STATUSBAR_IP12MAX_HEIGHT;
  }
}

export function statusBarHeight(skipAndroid = false, skipIos = false): number {
  return Platform.select({
    ios: skipIos ? 0 : statusBarHeights,
    android: skipAndroid ? 0 : StatusBarManager.HEIGHT,
    default: 0
  });
}

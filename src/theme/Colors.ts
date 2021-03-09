import type { StatusBarStyle } from 'react-native';

export type MyThemeColorsType = {
  primary: string;
  secondary: string;
  white: string;
  black: string;
  error: string;
  gray: string;
  orange: string;
  blue: string;
  invertedWhite: string;
  invertedBlack: string;
  barStyle: StatusBarStyle;
};

export type MyThemeType = {
  dark: boolean;
  colors: MyThemeColorsType;
};

const MyLightTheme: MyThemeType = {
  dark: false,
  colors: {
    primary: '#141414',
    secondary: '#F1C336',
    white: '#FFFFFF',
    black: '#000000',
    error: '#FE2E2E',
    gray: '#757575',
    orange: '#f39c3c',
    blue: '#3787fc',
    invertedWhite: '#141414',
    invertedBlack: '#FFFFFF',

    barStyle: 'light-content'
  }
};

const MyDarkTheme: MyThemeType = {
  dark: true,
  colors: {
    primary: '#141414',
    secondary: '#F1C336',
    white: '#FFFFFF',
    black: '#000000',
    error: '#FE2E2E',
    gray: '#757575',
    orange: '#f39c3c',
    blue: '#3787fc',
    invertedWhite: '#FFFFFF',
    invertedBlack: '#141414',

    barStyle: 'dark-content'
  }
};

export function Colors(isDarkTheme: boolean): MyThemeType {
  const theme = isDarkTheme ? MyDarkTheme : MyLightTheme;
  return theme;
}

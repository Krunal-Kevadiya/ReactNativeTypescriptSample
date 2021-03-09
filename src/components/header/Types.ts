import { MyThemeColorsType } from '@theme';
import React from 'react';
import { ImageStyle, TextInput, TextStyle, ViewStyle } from 'react-native';
import { FontEnumType } from '../icon/Types';

export type BothSidePropsType = {
  type?: FontEnumType;
  name?: string;
  label?: string;
  onPress?: () => void;
  viewStyle?: ViewStyle;
  textStyle?: TextStyle;
  imageStyle?: ImageStyle;
  colors: MyThemeColorsType;
};

export type CenterSidePropsType = {
  type?: FontEnumType;
  name?: string;
  label?: string;
  onPress?: () => void;
  viewStyle?: ViewStyle;
  textStyle?: TextStyle;
  imageStyle?: ImageStyle;
  colors: MyThemeColorsType;
};

type TextInputPropsType = React.ComponentProps<typeof TextInput>;

export interface HeaderPropsType extends TextInputPropsType {
  typeLeft?: FontEnumType;
  nameLeft?: string;
  labelLeft?: string;
  onPressLeft?: () => void;
  viewStyleLeft?: ViewStyle;
  textStyleLeft?: TextStyle;
  imageStyleLeft?: ImageStyle;

  typeCenter?: FontEnumType;
  nameCenter?: string;
  labelCenter?: string;
  onPressCenter?: () => void;
  viewStyleCenter?: ViewStyle;
  textStyleCenter?: TextStyle;
  imageStyleCenter?: ImageStyle;

  typeRight?: FontEnumType;
  nameRight?: string;
  labelRight?: string;
  onPressRight?: () => void;
  viewStyleRight?: ViewStyle;
  textStyleRight?: TextStyle;
  imageStyleRight?: ImageStyle;

  isLowerCase?: boolean;
  isSearch?: boolean;
}

export interface SearchPropsType extends TextInputPropsType {
  isLowerCase?: boolean;
  colors: MyThemeColorsType;
}

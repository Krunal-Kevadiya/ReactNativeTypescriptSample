import { FontEnumType } from '@components';
import { ImageStyle } from 'react-native';

export type CustomBottomTabBarItemPropsType = {
  focused?: boolean;
  name: string;
  label: string;
  type: FontEnumType;
};

export type FloatingItemPropsType = {
  isBgColor?: boolean;
  focused?: boolean;
  name: string;
  label?: string;
  type: FontEnumType;
  style?: ImageStyle;
};

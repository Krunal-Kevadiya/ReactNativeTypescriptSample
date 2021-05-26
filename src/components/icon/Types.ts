import { ImageStyle, TextStyle } from 'react-native';

export enum FontEnumType {
  antDesign,
  entypo,
  evilIcons,
  feather,
  fontAwesome,
  fontAwesome5,
  fontisto,
  foundation,
  ionicons,
  materialIcons,
  materialCommunityIcons,
  octicons,
  zocial,
  simpleLineIcons,
  other
}

export type CustomIconPropsType = {
  type: FontEnumType;
  size?: number;
  name: string | number | undefined;
  color?: string;
  style?: ImageStyle | TextStyle;
};

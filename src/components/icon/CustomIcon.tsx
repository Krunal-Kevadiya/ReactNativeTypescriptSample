import { has } from 'lodash';
import React from 'react';
import { ColorValue, Image, ImageStyle } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import type { CustomIconPropsType } from './Types';
import { FontEnumType } from './Types';

function getColor(styles?: ImageStyle, color?: string): string | undefined | ColorValue {
  if (has(styles, 'tintColor')) {
    return styles?.tintColor;
  }
  return color;
}

export function CustomIcon({ type, color, style, ...otherProps }: CustomIconPropsType): React.ReactElement {
  switch (type) {
    case FontEnumType.antDesign:
      return <AntDesign {...otherProps} style={style} color={getColor(style, color)} />;
    case FontEnumType.entypo:
      return <Entypo {...otherProps} style={style} color={getColor(style, color)} />;
    case FontEnumType.evilIcons:
      return <EvilIcons {...otherProps} style={style} color={getColor(style, color)} />;
    case FontEnumType.feather:
      return <Feather {...otherProps} style={style} color={getColor(style, color)} />;
    case FontEnumType.fontAwesome:
      return <FontAwesome {...otherProps} style={style} color={getColor(style, color)} />;
    case FontEnumType.fontAwesome5:
      return <FontAwesome5 {...otherProps} style={style} color={getColor(style, color)} />;
    case FontEnumType.fontisto:
      return <Fontisto {...otherProps} style={style} color={getColor(style, color)} />;
    case FontEnumType.foundation:
      return <Foundation {...otherProps} style={style} color={getColor(style, color)} />;
    case FontEnumType.ionicons:
      return <Ionicons {...otherProps} style={style} color={getColor(style, color)} />;
    case FontEnumType.materialCommunityIcons:
      return <MaterialCommunityIcons {...otherProps} style={style} color={getColor(style, color)} />;
    case FontEnumType.materialIcons:
      return <MaterialIcons {...otherProps} style={style} color={getColor(style, color)} />;
    case FontEnumType.octicons:
      return <Octicons {...otherProps} style={style} color={getColor(style, color)} />;
    case FontEnumType.simpleLineIcons:
      return <SimpleLineIcons {...otherProps} style={style} color={getColor(style, color)} />;
    case FontEnumType.zocial:
      return <Zocial {...otherProps} style={style} color={getColor(style, color)} />;
    default:
      // @ts-ignore
      return <Image source={otherProps.name} style={style} {...otherProps} />;
  }
}

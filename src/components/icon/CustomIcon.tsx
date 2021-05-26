import React from 'react';
import { Image } from 'react-native';
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

export function CustomIcon({ type, ...otherProps }: CustomIconPropsType): React.ReactElement {
  switch (type) {
    case FontEnumType.antDesign:
      return <AntDesign {...otherProps} />;
    case FontEnumType.entypo:
      return <Entypo {...otherProps} />;
    case FontEnumType.evilIcons:
      return <EvilIcons {...otherProps} />;
    case FontEnumType.feather:
      return <Feather {...otherProps} />;
    case FontEnumType.fontAwesome:
      return <FontAwesome {...otherProps} />;
    case FontEnumType.fontAwesome5:
      return <FontAwesome5 {...otherProps} />;
    case FontEnumType.fontisto:
      return <Fontisto {...otherProps} />;
    case FontEnumType.foundation:
      return <Foundation {...otherProps} />;
    case FontEnumType.ionicons:
      return <Ionicons {...otherProps} />;
    case FontEnumType.materialCommunityIcons:
      return <MaterialCommunityIcons {...otherProps} />;
    case FontEnumType.materialIcons:
      return <MaterialIcons {...otherProps} />;
    case FontEnumType.octicons:
      return <Octicons {...otherProps} />;
    case FontEnumType.simpleLineIcons:
      return <SimpleLineIcons {...otherProps} />;
    case FontEnumType.zocial:
      return <Zocial {...otherProps} />;
    default:
      // @ts-ignore
      return <Image source={otherProps.name} {...otherProps} />;
  }
}

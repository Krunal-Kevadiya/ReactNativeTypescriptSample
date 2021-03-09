import React from 'react';
import { Image } from 'react-native';
import type { ImageStaticPropsType } from './Types';

export function ImageStatic({ image, style }: ImageStaticPropsType): React.ReactElement {
  return <Image style={style} source={image || -1} resizeMode="contain" />;
}

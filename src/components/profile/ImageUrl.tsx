import React from 'react';
import FastImage from 'react-native-fast-image';
import type { ImageUrlPropsType } from './Types';

export function ImageUrl({ url, style, onError }: ImageUrlPropsType): React.ReactElement {
  return (
    <FastImage
      style={style}
      source={{
        uri: url,
        priority: FastImage.priority.high,
        cache: FastImage.cacheControl.immutable
      }}
      resizeMode={FastImage.resizeMode.cover}
      onError={onError}
    />
  );
}

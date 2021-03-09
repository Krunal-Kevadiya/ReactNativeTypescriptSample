import { isNotNullOrEmpty } from '@utils';
import React from 'react';
import { Pressable, View } from 'react-native';
import { ImageOverlap } from './ImageOverlap';
import { ImageStatic } from './ImageStatic';
import { ImageText } from './ImageText';
import { ImageUrl } from './ImageUrl';
import type { ProfileAvatarPropsType } from './Types';

export function ProfileAvatar({
  url,
  image,
  text,
  icon,
  style,
  textStyle,
  imageStyle,
  onPress
}: ProfileAvatarPropsType): React.ReactElement {
  const isUrl = isNotNullOrEmpty(url);
  const isImage = !isUrl && image !== -1;
  const isIcon = icon !== -1;
  const isText = !isUrl && !isImage && isNotNullOrEmpty(text);

  return (
    <Pressable onPress={onPress}>
      <View style={style}>
        {isUrl && <ImageUrl url={url} style={style} onError={() => {}} />}
        {isImage && <ImageStatic image={image} style={imageStyle} />}
        {isText && <ImageText text={text} style={textStyle} />}
        {isIcon && <ImageOverlap icon={icon} style={style} imageStyle={imageStyle} />}
      </View>
    </Pressable>
  );
}

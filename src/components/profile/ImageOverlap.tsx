import { ThemeSelectors } from '@reduxs';
import { generateOpacity } from '@utils';
import React from 'react';
import { Image, View } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './ImageOverlapStyles';
import type { ImageOverlapPropsType } from './Types';

export function ImageOverlap({ icon, style, imageStyle }: ImageOverlapPropsType): React.ReactElement {
  const { colors } = useSelector(ThemeSelectors.getTheme);
  return (
    <View style={[style, styles.imageOverlap, { backgroundColor: generateOpacity(colors.invertedWhite, 30) }]}>
      <Image style={[imageStyle, { tintColor: colors.invertedBlack }]} source={icon || -1} />
    </View>
  );
}

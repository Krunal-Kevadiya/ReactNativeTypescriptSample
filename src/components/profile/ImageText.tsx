import { getTwoInitialCharacters } from '@utils';
import React from 'react';
import { Text } from 'react-native';
import type { ImageTextPropsType } from './Types';

export function ImageText({ text, style }: ImageTextPropsType): React.ReactElement {
  return <Text style={style}>{getTwoInitialCharacters(text)}</Text>;
}

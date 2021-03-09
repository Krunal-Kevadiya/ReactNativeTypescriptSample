import { CustomIcon } from '@components';
import { getConstColors } from '@constants';
import { isNotNullOrEmpty } from '@utils';
import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './styles/BothSideStyles';
import type { BothSidePropsType } from './Types';

export function BothSide({
  type,
  name,
  label,
  onPress,
  viewStyle,
  textStyle,
  imageStyle,
  colors
}: BothSidePropsType): React.ReactElement {
  return (
    <Pressable style={[styles.bothSide, viewStyle]} onPress={onPress}>
      {isNotNullOrEmpty(label) && <Text style={[styles.textLabel, textStyle, { color: colors.white }]}>{label}</Text>}
      {type && name && (
        <CustomIcon type={type} name={name} color={getConstColors(colors.gray, '200')} size={24} style={imageStyle} />
      )}
    </Pressable>
  );
}

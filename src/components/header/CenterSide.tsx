import { CustomIcon } from '@components';
import { getConstColors } from '@constants';
import { isNotNullOrEmpty } from '@utils';
import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './styles/CenterSideStyles';
import type { CenterSidePropsType } from './Types';

export function CenterSide({
  type,
  name,
  label,
  onPress,
  viewStyle,
  textStyle,
  imageStyle,
  colors
}: CenterSidePropsType): React.ReactElement {
  return (
    <Pressable style={[styles.centerSide, viewStyle]} onPress={onPress}>
      {isNotNullOrEmpty(label) && <Text style={[styles.textTitle, textStyle, { color: colors.white }]}>{label}</Text>}
      {type && name && (
        <CustomIcon
          type={type}
          name={name}
          color={getConstColors(colors.gray, '200')}
          size={24}
          style={{ ...imageStyle, ...styles.imageTitle }}
        />
      )}
    </Pressable>
  );
}

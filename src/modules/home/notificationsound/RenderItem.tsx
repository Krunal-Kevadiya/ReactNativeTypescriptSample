import { ThemeSelectors } from '@reduxs';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { getTextColor } from './NotificationSoundUtil';
import styles from './styles/RenderItemStyles';
import type { RenderItemType } from './Types';

export function RenderItem({ item, handlePress }: RenderItemType): React.ReactElement {
  const { colors } = useSelector(ThemeSelectors.getTheme);

  return (
    <Pressable onPress={() => handlePress(item)}>
      <Text style={[styles.actionSheetItem, { color: getTextColor(item, colors) }]}>{item.name}</Text>
    </Pressable>
  );
}

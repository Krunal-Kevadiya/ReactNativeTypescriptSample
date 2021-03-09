import { getConstColors, CreateProfileStrings } from '@constants';
import { useDebouncedCallback } from '@hooks';
import { ThemeSelectors } from '@reduxs';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { actionSheetRef } from './CreateProfileScreen';
import styles from './styles/RenderItemStyles';
import type { RenderItemType } from './Types';

export function RenderItem({ item, handleTakePhoto, handleChooseLibrary }: RenderItemType): React.ReactElement {
  const { colors } = useSelector(ThemeSelectors.getTheme);
  const handlePress = useDebouncedCallback(
    () => {
      actionSheetRef?.current?.hide();
      switch (item) {
        case CreateProfileStrings.listSelectAPhoto[0]:
          handleTakePhoto();
          break;
        case CreateProfileStrings.listSelectAPhoto[1]:
          handleChooseLibrary();
          break;
        default:
      }
    },
    500,
    { leading: true, trailing: false }
  );

  return (
    <Pressable onPress={handlePress}>
      <Text style={[styles.actionSheetItem, { color: getConstColors(colors.gray, '100') }]}>{item}</Text>
    </Pressable>
  );
}

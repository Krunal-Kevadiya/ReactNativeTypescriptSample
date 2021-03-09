import { CompleteProfileStrings, getConstColors } from '@constants';
import { useDebouncedCallback } from '@hooks';
import { ThemeSelectors } from '@reduxs';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { actionSheetRef } from './CompleteProfileScreen';
import styles from './styles/RenderItemStyles';
import type { RenderItemTypeType } from './Types';

export function RenderItem({ item, handleTakePhoto, handleChooseLibrary }: RenderItemTypeType): React.ReactElement {
  const { colors } = useSelector(ThemeSelectors.getTheme);
  const handlePress = useDebouncedCallback(
    () => {
      actionSheetRef?.current?.hide();
      switch (item) {
        case CompleteProfileStrings.listSelectAPhoto[0]:
          handleTakePhoto();
          break;
        case CompleteProfileStrings.listSelectAPhoto[1]:
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

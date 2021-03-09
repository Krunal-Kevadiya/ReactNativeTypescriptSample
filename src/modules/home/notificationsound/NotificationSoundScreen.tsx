import { FontEnumType, Header } from '@components';
import { getConstColors, NotificationStrings } from '@constants';
import { ThemeSelectors } from '@reduxs';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import SpinnerButton from 'react-native-spinner-button';
import { useAsyncStorage, useDebouncedCallback } from '@hooks';
import { cloneDeep } from 'lodash';
import { navigateToggleDrawer } from '@navigations';
import { RenderItem } from './RenderItem';
import styles from './styles/NotificationSoundStyles';
import type { ItemType } from './Types';
import { getNotificationList, isRemainingToFillForm } from './NotificationSoundUtil';

export function NotificationSoundScreen(): React.ReactElement {
  const [storageValue, updateStorage] = useAsyncStorage<ItemType | undefined>('NotificationSound', undefined);
  const [list, setList] = useState(getNotificationList());
  const { colors } = useSelector(ThemeSelectors.getTheme);
  const handlePress = useDebouncedCallback(
    (data: ItemType) => {
      setList(
        list.map((item) => {
          if (data.id === item.id) {
            return { ...item, selected: 1 };
          }
          if (item.selected !== 2) {
            return { ...item, selected: 0 };
          }
          return item;
        })
      );
    },
    500,
    { leading: true, trailing: false }
  );
  const handleSave = useCallback(() => {
    const selectedList = list.filter((item) => item.selected === 1);
    if (selectedList.length > 0) {
      const selectedItem = cloneDeep(selectedList[0]);
      delete selectedItem.selected;
      updateStorage(selectedItem);
    }
  }, [list]);

  useEffect(() => {
    setList(getNotificationList(storageValue));
  }, [storageValue]);

  return (
    <View style={[styles.screen, { backgroundColor: colors.invertedBlack }]}>
      <Header
        typeLeft={FontEnumType.materialIcons}
        nameLeft="menu"
        labelCenter={NotificationStrings.title}
        labelRight={NotificationStrings.btnSave}
        onPressLeft={() => navigateToggleDrawer()}
        onPressRight={handleSave}
      />
      <View style={styles.container}>
        <FlatList
          style={styles.flatListContainer}
          data={list}
          renderItem={({ item }) => <RenderItem item={item} handlePress={handlePress} />}
          keyExtractor={(item) => String(item.id)}
          ItemSeparatorComponent={() => (
            <View style={[styles.lineView, { backgroundColor: getConstColors(colors.gray, '300') }]} />
          )}
        />
        <SpinnerButton
          buttonContainer={[styles.buttonContainer, styles.btnSave]}
          buttonStyle={styles.spinnerButton}
          gradientType="linear"
          gradientColorAngle={90}
          gradientRadialRadius={10}
          gradientButtonHeight={50}
          gradientColoroffset={['0%', '100%']}
          disabled={isRemainingToFillForm(list)}
          gradientColors={[getConstColors(colors.secondary, '900'), getConstColors(colors.secondary, '100')]}
          disableGradientColors={[getConstColors(colors.gray, '900'), getConstColors(colors.gray, '100')]}
          onPress={handleSave}>
          <Text style={[styles.textLabel, { color: colors.primary }]}>{NotificationStrings.btnSave}</Text>
        </SpinnerButton>
      </View>
    </View>
  );
}

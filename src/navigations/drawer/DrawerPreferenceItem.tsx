import { CustomSwitch } from '@components';
import { getConstColors } from '@constants';
import { useAsyncStorage } from '@hooks';
import { ThemeActions, ThemeSelectors } from '@reduxs';
import { Colors } from '@theme';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles/DrawerPreferenceItemStyles';
import { DrawerPreferenceItemPropsType } from './Types';

export function DrawerPreferenceItem({ title }: DrawerPreferenceItemPropsType): React.ReactElement {
  const dispatch = useDispatch();
  const { colors, dark } = useSelector(ThemeSelectors.getTheme);
  const [storageValue, updateStorage] = useAsyncStorage<boolean | undefined>(title, undefined);

  useEffect(() => {
    if (title === 'Dark Theme' && dark !== storageValue && storageValue !== undefined) {
      dispatch(ThemeActions.changeTheme(Colors(storageValue)));
    }
  }, [title, storageValue]);

  return (
    <View style={styles.preferenceView}>
      <Text style={[styles.preferenceItemText, { color: colors.invertedWhite }]}>{title}</Text>
      <CustomSwitch
        handleOnPress={(flag) => {
          updateStorage(flag);
        }}
        activeTrackColor={getConstColors(colors.gray, '900')}
        inActiveTrackColor={colors.gray}
        activeThumbColor={colors.secondary}
        inActiveThumbColor={getConstColors(colors.gray, '100')}
        value={storageValue || false}
      />
    </View>
  );
}

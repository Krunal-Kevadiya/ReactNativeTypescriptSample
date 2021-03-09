import { CustomIcon } from '@components';
import { getConstColors } from '@constants';
import { ThemeSelectors } from '@reduxs';
import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles/CustomBottomTabBarItemStyles';
import type { CustomBottomTabBarItemPropsType } from './Types';

export function CustomBottomTabBarItem({
  focused,
  name,
  type,
  label
}: CustomBottomTabBarItemPropsType): React.ReactElement {
  const { colors } = useSelector(ThemeSelectors.getTheme);

  return (
    <View style={styles.bottomTabBarItemContainer}>
      <CustomIcon
        type={type}
        name={name}
        color={focused ? colors.secondary : getConstColors(colors.gray, '200')}
        size={24}
      />
      <Text
        style={[
          styles.bottomTabBarItemText,
          { color: focused ? colors.secondary : getConstColors(colors.gray, '200') }
        ]}>
        {label}
      </Text>
    </View>
  );
}

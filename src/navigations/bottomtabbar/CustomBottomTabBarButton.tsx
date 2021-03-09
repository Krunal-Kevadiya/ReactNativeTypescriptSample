import { getConstColors } from '@constants';
import type { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { ThemeSelectors } from '@reduxs';
import React from 'react';
import { Pressable, View } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles/CustomBottomTabBarButtonStyles';

export function CustomBottomTabBarButton({ children, onPress }: BottomTabBarButtonProps): React.ReactElement {
  const { colors } = useSelector(ThemeSelectors.getTheme);

  return (
    <View
      style={[
        styles.bottomTabBarButtonContainer,
        {
          backgroundColor: colors.invertedBlack
        }
      ]}>
      <Pressable
        style={[
          styles.bottomTabBarView,
          {
            shadowColor: getConstColors(colors.gray, '400'),
            borderColor: colors.invertedWhite,
            backgroundColor: colors.secondary
          }
        ]}
        onPress={onPress}>
        {children}
      </Pressable>
    </View>
  );
}

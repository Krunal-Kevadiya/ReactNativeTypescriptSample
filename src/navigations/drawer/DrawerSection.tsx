import { ThemeSelectors } from '@reduxs';
import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles/DrawerSectionStyles';
import type { DrawerSectionPropsType } from './Types';

export function DrawerSection({
  title,
  children,
  isDrawLine = true,
  style,
  textStyle
}: DrawerSectionPropsType): React.ReactElement {
  const { colors } = useSelector(ThemeSelectors.getTheme);

  return (
    <View style={style}>
      {isDrawLine && <View style={[styles.sectionLine, { backgroundColor: colors.gray }]} />}
      {title && <Text style={[styles.textSection, textStyle, { color: colors.gray }]}>{title}</Text>}
      {children && children}
      {isDrawLine && <View style={[styles.sectionLine, { backgroundColor: colors.gray }]} />}
    </View>
  );
}

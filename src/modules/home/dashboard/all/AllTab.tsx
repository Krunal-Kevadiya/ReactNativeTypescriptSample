import { Icons } from '@assets';
import { FontEnumType, Header } from '@components';
import { navigateToggleDrawer } from '@navigations';
import { ThemeSelectors } from '@reduxs';
import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './AllStyles';

export function AllTab(): React.ReactElement {
  const { colors } = useSelector(ThemeSelectors.getTheme);

  return (
    <View style={[styles.screen, { backgroundColor: colors.invertedBlack }]}>
      <Header
        typeLeft={FontEnumType.materialIcons}
        nameLeft="menu"
        nameCenter={Icons.logo}
        typeCenter={FontEnumType.other}
        onPressLeft={() => navigateToggleDrawer()}
      />
      <View style={styles.container}>
        <Text>All</Text>
      </View>
    </View>
  );
}

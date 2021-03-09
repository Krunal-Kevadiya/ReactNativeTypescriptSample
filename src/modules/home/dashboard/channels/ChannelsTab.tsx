import { FontEnumType, Header } from '@components';
import { navigateToggleDrawer } from '@navigations';
import { ThemeSelectors } from '@reduxs';
import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './ChannelsStyles';

export function ChannelsTab(): React.ReactElement {
  const { colors } = useSelector(ThemeSelectors.getTheme);

  return (
    <View style={[styles.screen, { backgroundColor: colors.invertedBlack }]}>
      <Header
        typeLeft={FontEnumType.materialIcons}
        nameLeft="menu"
        labelCenter="Channel Message"
        onPressLeft={() => navigateToggleDrawer()}
      />
      <View style={styles.container}>
        <Text>Channels</Text>
      </View>
    </View>
  );
}

import { FontEnumType, Header } from '@components';
import { navigateToggleDrawer } from '@navigations';
import { ThemeSelectors } from '@reduxs';
import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './UnreadStyles';

export function UnreadTab(): React.ReactElement {
  const { colors } = useSelector(ThemeSelectors.getTheme);

  return (
    <View style={[styles.screen, { backgroundColor: colors.invertedBlack }]}>
      <Header
        typeLeft={FontEnumType.materialIcons}
        nameLeft="menu"
        labelCenter="Unread Message"
        nameRight="add"
        typeRight={FontEnumType.materialIcons}
        imageStyleRight={{ color: colors.primary }}
        viewStyleRight={{ ...styles.inviteBtn, backgroundColor: colors.secondary }}
        onPressLeft={() => navigateToggleDrawer()}
      />
      <View style={styles.container}>
        <Text>Unread</Text>
      </View>
    </View>
  );
}

import { ProfileAvatar } from '@components';
import { ThemeSelectors } from '@reduxs';
import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles/DrawerContentHeaderStyles';

export function DrawerContentHeader(): React.ReactElement {
  const { colors } = useSelector(ThemeSelectors.getTheme);

  return (
    <View style={styles.userInfoSection}>
      <View style={styles.userProfileView}>
        <ProfileAvatar
          url="https://api.adorable.io/avatars/50/abott@adorable.png"
          style={[styles.profileAvatar, { backgroundColor: colors.invertedWhite }]}
        />
        <View style={styles.profileNameView}>
          <Text style={[styles.textUserName, { color: colors.invertedWhite }]}>John Doe</Text>
          <Text style={[styles.textSubTitle, { color: colors.gray }]}>@j_doe</Text>
        </View>
      </View>

      <View style={styles.rowView}>
        <View style={styles.sectionView}>
          <Text style={[styles.textSubTitle, styles.textCount, { color: colors.invertedWhite }]}>80</Text>
          <Text style={[styles.textSubTitle, { color: colors.gray }]}>Friends</Text>
        </View>
        <View style={styles.sectionView}>
          <Text style={[styles.textSubTitle, styles.textCount, { color: colors.invertedWhite }]}>100</Text>
          <Text style={[styles.textSubTitle, { color: colors.gray }]}>Groups</Text>
        </View>
      </View>
    </View>
  );
}

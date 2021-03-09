import { CustomIcon } from '@components';
import { drawerMenuList, drawerMenuPreferenceList, drawerSignOutMenu } from '@constants';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { ThemeSelectors } from '@reduxs';
import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles/DrawerContentStyles';
import { DrawerContentHeader } from './DrawerContentHeader';
import { DrawerPreferenceItem } from './DrawerPreferenceItem';
import { DrawerSection } from './DrawerSection';
import { navigateWithParam } from '../NavigationUtil';

export function DrawerContent(props: DrawerContentComponentProps): React.ReactElement {
  const { colors } = useSelector(ThemeSelectors.getTheme);

  return (
    <View style={[styles.drawerContent, { backgroundColor: colors.invertedBlack }]}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <DrawerContentHeader />
          <View style={styles.drawerSection}>
            {drawerMenuList.map((item) => {
              return (
                <DrawerItem
                  {...props}
                  key={item.id}
                  labelStyle={[styles.drawerItemText, { color: colors.invertedWhite }]}
                  icon={({ size }) => (
                    <CustomIcon type={item.type} name={item.icon} color={colors.invertedWhite} size={size} />
                  )}
                  label={item.label}
                  onPress={() => navigateWithParam(item.navigate, item.params)}
                />
              );
            })}
          </View>
          <DrawerSection title="Preferences">
            {drawerMenuPreferenceList.map((item) => {
              return <DrawerPreferenceItem key={item.id} title={item.label} />;
            })}
          </DrawerSection>
        </View>
      </DrawerContentScrollView>
      <DrawerSection style={styles.bottomDrawerSection}>
        <DrawerItem
          {...props}
          labelStyle={[styles.drawerItemText, { color: colors.invertedWhite }]}
          icon={({ size }) => (
            <CustomIcon
              type={drawerSignOutMenu.type}
              name={drawerSignOutMenu.icon}
              color={colors.invertedWhite}
              size={size}
            />
          )}
          label={drawerSignOutMenu.label}
          onPress={() => {}}
        />
      </DrawerSection>
    </View>
  );
}

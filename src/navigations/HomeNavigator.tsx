import { bottomBarList } from '@constants';
import {
  AllTab,
  BrowserScreen,
  ChannelsTab,
  EditProfileScreen,
  NotificationSoundScreen,
  PeopleTab,
  TranslationLanguageScreen,
  UnreadTab
} from '@modules';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeSelectors } from '@reduxs';
import { horizontalScale, verticalScale } from '@theme';
import React from 'react';
import { useSelector } from 'react-redux';
import { RecorderTab } from './bottomtabbar/RecorderTab';
import { AppRoute } from './AppRoute';
import { CustomBottomTabBarButton } from './bottomtabbar/CustomBottomTabBarButton';
import { CustomBottomTabBarItem } from './bottomtabbar/CustomBottomTabBarItem';
import { FloatingItem } from './bottomtabbar/FloatingItem';
import { DrawerContent } from './drawer/DrawerContent';

export type HomeNavigatorParams = {
  [AppRoute.DASH_BOARD]: undefined;
  [AppRoute.EDIT_PROFILE]: undefined;
  [AppRoute.TRANSLATION_LANGUAGE]: undefined;
  [AppRoute.BROWSER]: undefined;
  [AppRoute.NOTIFICATION_SOUND]: undefined;
};

export type HomeTabNavigatorParams = {
  [AppRoute.UNREAD_TAB]: undefined;
  [AppRoute.ALL_TAB]: undefined;
  [AppRoute.RECORDER_TAB]: undefined;
  [AppRoute.PEOPLE_TAB]: undefined;
  [AppRoute.CHANNELS_TAB]: undefined;
};

const Tab = createBottomTabNavigator<HomeTabNavigatorParams>();

type TabScreenOptionPropsType = {
  focused: boolean;
};
export function HomeBottomNavigator(): React.ReactElement {
  const { colors } = useSelector(ThemeSelectors.getTheme);

  return (
    <Tab.Navigator
      initialRouteName={AppRoute.UNREAD_TAB}
      tabBarOptions={{
        showLabel: false,
        style: {
          borderTopWidth: verticalScale(1),
          paddingHorizontal: horizontalScale(15),
          backgroundColor: colors.primary,
          borderTopColor: colors.gray
        }
      }}>
      <Tab.Screen
        name={AppRoute.UNREAD_TAB}
        component={UnreadTab}
        options={{
          tabBarIcon: ({ focused }: TabScreenOptionPropsType) => (
            <CustomBottomTabBarItem
              focused={focused}
              label={bottomBarList[0].label}
              name={bottomBarList[0].icon}
              type={bottomBarList[0].type}
            />
          )
        }}
      />
      <Tab.Screen
        name={AppRoute.ALL_TAB}
        component={AllTab}
        options={{
          tabBarIcon: ({ focused }: TabScreenOptionPropsType) => (
            <CustomBottomTabBarItem
              focused={focused}
              label={bottomBarList[1].label}
              name={bottomBarList[1].icon}
              type={bottomBarList[1].type}
            />
          )
        }}
      />
      <Tab.Screen
        name={AppRoute.RECORDER_TAB}
        component={RecorderTab}
        options={{
          tabBarIcon: () => (
            <FloatingItem
              name={bottomBarList[2].icon}
              type={bottomBarList[2].type}
              style={{ transform: [{ rotate: '45deg' }] }}
            />
          ),
          tabBarButton: (props) => <CustomBottomTabBarButton {...props} />
        }}
        listeners={() => ({
          tabPress: (event) => {
            event.preventDefault();
          }
        })}
      />
      <Tab.Screen
        name={AppRoute.PEOPLE_TAB}
        component={PeopleTab}
        options={{
          tabBarIcon: ({ focused }: TabScreenOptionPropsType) => (
            <CustomBottomTabBarItem
              focused={focused}
              label={bottomBarList[3].label}
              name={bottomBarList[3].icon}
              type={bottomBarList[3].type}
            />
          )
        }}
      />
      <Tab.Screen
        name={AppRoute.CHANNELS_TAB}
        component={ChannelsTab}
        options={{
          tabBarIcon: ({ focused }: TabScreenOptionPropsType) => (
            <CustomBottomTabBarItem
              focused={focused}
              label={bottomBarList[4].label}
              name={bottomBarList[4].icon}
              type={bottomBarList[4].type}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator<HomeNavigatorParams>();
const Stack = createStackNavigator<HomeNavigatorParams>();

export function HomeNavigator(): React.ReactElement {
  return (
    <Drawer.Navigator
      drawerType="slide"
      initialRouteName={AppRoute.DASH_BOARD}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Stack.Screen name={AppRoute.DASH_BOARD} component={HomeBottomNavigator} />
      <Stack.Screen name={AppRoute.EDIT_PROFILE} component={EditProfileScreen} />
      <Stack.Screen name={AppRoute.TRANSLATION_LANGUAGE} component={TranslationLanguageScreen} />
      <Stack.Screen name={AppRoute.BROWSER} component={BrowserScreen} />
      <Stack.Screen name={AppRoute.NOTIFICATION_SOUND} component={NotificationSoundScreen} />
    </Drawer.Navigator>
  );
}

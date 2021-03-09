import { useMyTheme } from '@hooks';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AppRoute } from './AppRoute';
import { AuthNavigator } from './AuthNavigator';
import { HomeNavigator } from './HomeNavigator';
import { LaunchNavigator } from './LaunchNavigator';

type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type AppNavigatorParams = {
  [AppRoute.LAUNCH]: undefined;
  [AppRoute.AUTH]: undefined;
  [AppRoute.HOME]: undefined;
};

const Stack = createStackNavigator<AppNavigatorParams>();

export const navigationRef = React.createRef();

export function AppNavigator(props: Partial<StackNavigatorProps>): React.ReactElement {
  const { theme } = useMyTheme();

  return (
    // @ts-ignore
    <NavigationContainer theme={theme} ref={navigationRef}>
      <Stack.Navigator {...props} headerMode="none" initialRouteName={AppRoute.LAUNCH}>
        <Stack.Screen name={AppRoute.LAUNCH} component={LaunchNavigator} />
        <Stack.Screen name={AppRoute.AUTH} component={AuthNavigator} />
        <Stack.Screen name={AppRoute.HOME} component={HomeNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

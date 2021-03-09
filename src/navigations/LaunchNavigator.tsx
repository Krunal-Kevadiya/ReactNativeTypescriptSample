import { WelcomeScreen } from '@modules';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import type { AppNavigatorParams } from './AppNavigator';
import { AppRoute } from './AppRoute';

export type LaunchNavigatorParams = AppNavigatorParams & {
  [AppRoute.WEL_COME]: undefined;
  [AppRoute.SIGN_IN]: undefined;
};

const Stack = createStackNavigator<LaunchNavigatorParams>();

export function LaunchNavigator(): React.ReactElement {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={AppRoute.WEL_COME}>
      <Stack.Screen name={AppRoute.WEL_COME} component={WelcomeScreen} />
    </Stack.Navigator>
  );
}

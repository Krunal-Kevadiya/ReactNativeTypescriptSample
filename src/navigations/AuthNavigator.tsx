import {
  CompleteProfileScreen,
  CreateProfileScreen,
  CreateUserNameScreen,
  SignInScreen,
  SignUpScreen,
  VerifyScreen
} from '@modules';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import type { AppNavigatorParams } from './AppNavigator';
import { AppRoute } from './AppRoute';

export type AuthNavigatorParams = AppNavigatorParams & {
  [AppRoute.SIGN_IN]: undefined;
  [AppRoute.SIGN_UP]: undefined;
  [AppRoute.VERIFY]: undefined;
  [AppRoute.CREATE_PROFILE_PICTURE]: undefined;
  [AppRoute.CREATE_PROFILE_NAME]: undefined;
  [AppRoute.COMPLETE_PROFILE]: undefined;
  [AppRoute.CONTACT]: undefined;
};

const Stack = createStackNavigator<AuthNavigatorParams>();

export function AuthNavigator(): React.ReactElement {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={AppRoute.CREATE_PROFILE_PICTURE}>
      <Stack.Screen name={AppRoute.SIGN_IN} component={SignInScreen} />
      <Stack.Screen name={AppRoute.SIGN_UP} component={SignUpScreen} />
      <Stack.Screen name={AppRoute.VERIFY} component={VerifyScreen} />
      <Stack.Screen name={AppRoute.CREATE_PROFILE_PICTURE} component={CreateProfileScreen} />
      <Stack.Screen name={AppRoute.CREATE_PROFILE_NAME} component={CreateUserNameScreen} />
      <Stack.Screen name={AppRoute.COMPLETE_PROFILE} component={CompleteProfileScreen} />
      <Stack.Screen name={AppRoute.CONTACT} component={SignInScreen} />
    </Stack.Navigator>
  );
}

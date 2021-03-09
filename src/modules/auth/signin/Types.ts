import { SignUpModel } from '@models';
import { AppRoute } from '@navigations';
import { RouteProp } from '@react-navigation/core';

type ParamListType = {
  'Sign In': SignUpModel;
};
export type SignInRoutePropsType = RouteProp<ParamListType, AppRoute.SIGN_IN>;

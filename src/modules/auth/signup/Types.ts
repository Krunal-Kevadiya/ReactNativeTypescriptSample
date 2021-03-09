import { SignInModel } from '@models';
import { AppRoute } from '@navigations';
import { RouteProp } from '@react-navigation/core';

type ParamListType = {
  'Sign Up': SignInModel;
};
export type SignUpRoutePropsType = RouteProp<ParamListType, AppRoute.SIGN_UP>;

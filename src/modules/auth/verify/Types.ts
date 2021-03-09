import { SignUpModel } from '@models';
import { AppRoute } from '@navigations';
import { RouteProp } from '@react-navigation/core';

type ParamListType = {
  Verify: SignUpModel;
};
export type VerifyRoutePropsType = RouteProp<ParamListType, AppRoute.VERIFY>;

import { CreateProfileModel, CreateUserNameModel } from '@models';
import { FormikProps } from 'formik';
import { AppRoute } from '@navigations';
import { RouteProp } from '@react-navigation/core';

type ParamListType = {
  'Create Profile Name': CreateProfileModel;
};
export type CreateProfileUserNameRoutePropsType = RouteProp<ParamListType, AppRoute.CREATE_PROFILE_NAME>;

export type RenderFormPropsType = {
  errorMsg?: string;
  isResultStatus?: boolean;
} & FormikProps<CreateUserNameModel>;

import { CompleteProfileModel } from '@models';
import { FormikProps } from 'formik';
import { AppRoute } from '@navigations';
import { RouteProp } from '@react-navigation/core';

type ParamListType = {
  'Complete Profile': CompleteProfileModel;
};
export type CompleteProfileRoutePropsType = RouteProp<ParamListType, AppRoute.COMPLETE_PROFILE>;

export type RenderFormPropsType = {
  errorMsg?: string;
  isResultStatus?: boolean;
} & FormikProps<CompleteProfileModel>;

export type RenderItemTypeType = {
  item: string;
  handleTakePhoto: () => void;
  handleChooseLibrary: () => void;
};

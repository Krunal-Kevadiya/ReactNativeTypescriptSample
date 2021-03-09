import type { AppRoute } from '@navigations';
import { RouteProp } from '@react-navigation/core';

type DictionaryType = {
  [key: string]: string;
};

type ParamListType = {
  Browser: DictionaryType;
};

export type BrowserRoutePropsType = RouteProp<ParamListType, AppRoute.BROWSER>;

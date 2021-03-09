import { Colors, MyThemeType } from '@theme';
import Immutable, { ImmutableObject } from 'seamless-immutable';
import type { DefaultActionTypes } from 'reduxsauce';
import { createActions } from 'reduxsauce';
import type { RootStateType } from '../Store';

/* ------------- Initial State ------------- */
export type ThemeStateType = {
  theme: MyThemeType;
};

export const INITIAL_STATE: ImmutableObject<ThemeStateType> = Immutable<ThemeStateType>({
  theme: Colors(true)
});

/* ------------- Types and Action Creators ------------- */
type ThemeActionsType = {
  changeTheme: (theme: MyThemeType) => void;
};

const { Types, Creators } = createActions<DefaultActionTypes, ThemeActionsType>({
  changeTheme: ['theme']
});

export const ThemeTypes = Types;
export const ThemeActions: ThemeActionsType = Creators;

/* ------------- Selectors ------------- */
type ThemeSelectorsType = {
  getData: (state: RootStateType) => ThemeStateType;
  getTheme: (state: RootStateType) => MyThemeType;
};

export const ThemeSelectors: ThemeSelectorsType = {
  getData: (state: RootStateType) => state.theme,
  getTheme: (state: RootStateType) => state.theme.theme
};

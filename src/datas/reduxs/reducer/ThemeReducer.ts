import { createReducer } from 'reduxsauce';
import { ImmutableObject } from 'seamless-immutable';
import { INITIAL_STATE, ThemeStateType, ThemeTypes } from '../actor/ThemeActionSelectorAndState';

/* ------------- Reducers ------------- */
function handleThemeChange(
  state: ImmutableObject<ThemeStateType>,
  { theme }: ThemeStateType
): ImmutableObject<ThemeStateType> {
  return state.merge({ theme });
}

/* ------------- Hookup Reducers To Types ------------- */
export const themeReducer = createReducer<ImmutableObject<ThemeStateType>, { type: any; theme?: ThemeStateType }>(
  INITIAL_STATE,
  {
    [ThemeTypes.CHANGE_THEME]: handleThemeChange
  }
);

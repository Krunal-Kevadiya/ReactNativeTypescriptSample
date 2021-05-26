import { createSlice, PayloadAction, WritableDraft } from '@reduxjs/toolkit';
import { Colors, MyThemeType } from '@theme';
import { RootStateType } from './Store';

/* ------------- Selectors ------------- */
type ThemeSelectorsType = {
  getData: (state: RootStateType) => ThemeStateType;
  getTheme: (state: RootStateType) => MyThemeType;
};

export const ThemeSelectors: ThemeSelectorsType = {
  getData: (state: RootStateType) => state.theme,
  getTheme: (state: RootStateType) => state.theme.theme
};

/* ------------- Initial State ------------- */
type ThemeStateType = {
  theme: MyThemeType;
};

const INITIAL_STATE: ThemeStateType = {
  theme: Colors(true)
};

/* ------------- Reducers ------------- */
function changeTheme(state: WritableDraft<ThemeStateType>, action: PayloadAction<MyThemeType>): void {
  state.theme = action.payload;
}

/* ------------- Hookup Reducers To Types ------------- */
const themeSlice = createSlice({
  name: 'theme',
  initialState: INITIAL_STATE,
  reducers: {
    changeTheme
  }
});

export const ThemeReducer = themeSlice.reducer;
export const ThemeActions = themeSlice.actions;

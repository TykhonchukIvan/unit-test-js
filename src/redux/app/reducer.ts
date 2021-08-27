import {createSlice, createAction, PayloadAction} from '@reduxjs/toolkit';
import {IApp, IChangeThemeColorsAction} from '@src/redux/app/types';
import {lightTheme} from '@src/constants/constants';

const STORE_APP = '@app';

const initialState: IApp = {
  colorTheme: 'light',
  colorSpectrum: lightTheme,
};

export enum appTypes {
  CHANGE_THEME_COLORS = `@app/changeThemeColors`,
}

const appSlice = createSlice({
  name: STORE_APP,
  initialState,
  reducers: {
    setColorTheme(state, action) {state.colorTheme = action.payload},
    setColorSpectrum(state, action) {state.colorSpectrum = action.payload},
  }
});

export const appActions = {

  setColorTheme: appSlice.actions.setColorTheme,
  setColorSpectrum: appSlice.actions.setColorSpectrum,

  changeThemeColors: createAction<IChangeThemeColorsAction>(appTypes.CHANGE_THEME_COLORS),
};

export const appReducer = appSlice.reducer;
import {createSlice} from '@reduxjs/toolkit';
import {IApp} from '@src/redux/app/types';
import {darkTheme} from '@src/redux/app/constants';

const STORE_APP = '@app';

const initialState: IApp = {
  colorTheme: 'light',
  colorSpectrum: darkTheme,
};

export const appTypes = {};

const appSlice = createSlice({
  name: STORE_APP,
  initialState,
  reducers: {

  }
})

export const appActions = {

};

export const appReducer = appSlice.reducer;
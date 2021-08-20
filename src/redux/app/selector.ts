import {createSelector} from 'reselect';
import {RootState} from '@src/redux/storeConfig';

const appState = (state: RootState) => state.app;

export const appStore = {
  getColorTheme: createSelector(appState, app => app.colorTheme),
  getColorSpectrum: createSelector(appState, app => app.colorSpectrum),
}
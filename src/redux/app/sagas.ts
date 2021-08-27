import {call, put, takeEvery} from 'redux-saga/effects';
import {appActions, appTypes} from '@src/redux/app/reducer';
import {IChangeThemeColorsAction} from '@src/redux/app/types';
import {darkTheme, lightTheme} from '@src/constants/constants';

function* changeThemeColors(action: IChangeThemeColorsAction) {
  switch (action.payload){
    case 'dark':
      yield call(setLightTheme);
      break;
    case 'light':
      yield call(setDarkTheme);
      break;
    default:
      yield call(setLightTheme);
  }

}

function* setDarkTheme(){
  yield put(appActions.setColorTheme('dark'));
  yield put(appActions.setColorSpectrum(darkTheme));
}

function* setLightTheme(){
  yield put(appActions.setColorTheme('light'));
  yield put(appActions.setColorSpectrum(lightTheme));
}


export const appSagas = [
  takeEvery(appTypes.CHANGE_THEME_COLORS, changeThemeColors)
]
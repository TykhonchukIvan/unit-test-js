import {all} from 'redux-saga/effects';
import {appSagas} from '@src/redux/app/sagas';

function* rootSaga(): Generator {
  yield all([
    ...appSagas
  ])
}

export default rootSaga;
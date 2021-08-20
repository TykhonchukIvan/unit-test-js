import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootSaga from './rootSagas';
import {rootReducer} from './rootReducer';


const configureStore = () => {
  const sagaMiddleWare = createSagaMiddleware();

  let store;
  store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleWare)));
  store.sagaTask = sagaMiddleWare.run(rootSaga);
  return store;
}


export type RootState = ReturnType<typeof storeConfig.getState>;
export type AppDispatch = typeof storeConfig.dispatch;
export const storeConfig = configureStore();

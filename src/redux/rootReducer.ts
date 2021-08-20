import {combineReducers} from 'redux';
import {postReducer} from '@src/redux/posts/reducer';
import {appReducer} from '@src/redux/app/reducer';

export const rootReducer = combineReducers({
  post: postReducer,
  app: appReducer
});
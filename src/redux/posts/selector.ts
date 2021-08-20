import {createSelector} from 'reselect';
import {RootState} from '@src/redux/storeConfig';

const postState = (state: RootState) => state.post;

export const postStore = {
  getPage: createSelector(postState, post => post.posts),
}
import {createSlice} from '@reduxjs/toolkit';
import {IPosts} from '@src/redux/posts/types';

const STORE_POST = '@post';

const initialState: IPosts = {
  posts: [],
};

export const postsTypes = {

};

const postsSlice = createSlice({
  name: STORE_POST,
  initialState,
  reducers: {
    setPost(state, action){
      state.posts = action.payload;
    }
  },
});

export const postActions = {};

export const postReducer = postsSlice.reducer;

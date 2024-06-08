import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPostById = createAsyncThunk('post/fetchPostById', async (postId) => {
  const [post, comments] = await Promise.all([
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`),
    axios.get('https://jsonplaceholder.typicode.com/comments')
  ]);
  return {
    post: post.data,
    comments: comments.data
  };
});

export const postByIdSlice = createSlice({
  name: 'postById',
  initialState: { data: null, comments: null, loading: true, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.post;
        state.comments = action.payload.comments;
      })
      .addCase(fetchPostById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default postByIdSlice.reducer;

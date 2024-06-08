import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCommentsData = createAsyncThunk('comments/fetchCommentsData', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
  return response.data;
});

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: { data: null, loading: true, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCommentsData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCommentsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default commentsSlice.reducer;

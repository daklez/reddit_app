import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getSubreddits = createAsyncThunk(
  'subreddits/getSubreddits',
  async () => {
    const response = await fetch("https://www.reddit.com/subreddits.json");
    const json = await response.json();
    return json.data.children.map(subreddit => subreddit.data)
  }
)

const subredditsSlice = createSlice({
  name: 'subreddits',
  initialState: {
    subreddits: [],
    isLoading: false,
    hasFailed: false
  },
  extraReducers: {
    [getSubreddits.pending]: (state) => {
      state.isLoading = true;
      state.hasFailed = false
    },
    [getSubreddits.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.subreddits = action.payload;
    },
    [getSubreddits.rejected]: (state) => {
      state.isLoading = false;
      state.hasFailed = true;
    }
  }
})

export const selectSubreddits = (state) => state.subreddits.subreddits;
export const selectSubredditsLoading = state => state.subreddits.isLoading;
export const selectSubredditsFailed = state => state.subreddits.hasFailed;
export default subredditsSlice.reducer;
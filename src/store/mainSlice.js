import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadSubredditPosts = createAsyncThunk(
  "main/loadSubredditPosts",
  async (subredditUrl) => {
    const response = await fetch(`https://www.reddit.com${subredditUrl}.json`);
    const json = await response.json();
    return json.data.children.map((post) => post.data);
  }
);

export const loadPostComments = createAsyncThunk(
  "main/loadPostComments",
  async (commentsUrl) => {
    const response = await fetch(`https://www.reddit.com${commentsUrl}.json`);
    const json = await response.json();
    return json[1].data.children.map((comment) => comment.data);
  }
);

const mainSlice = createSlice({
  name: "main",
  initialState: {
    pickedSubreddit: "/r/pics/",
    posts: [],
    postComments: [],
    postsLoading: false,
    postsFailed: false,
    commentsLoading: false,
    comentsFailed: false
  },
  reducers: {
    pickNewSubrreddit: (state, action) => {
      state.pickedSubreddit = action.payload;
      state.postComments = [];
    },
  },
  extraReducers: {
    [loadSubredditPosts.pending]: (state) => {
      state.postsLoading = true;
      state.postsFailed = false;
    },
    [loadSubredditPosts.fulfilled]: (state, action) => {
      state.postsLoading = false;
      state.posts = action.payload;
    },
    [loadSubredditPosts.rejected]: (state) => {
      state.postsLoading = false;
      state.postsFailed = true;
    },
    [loadPostComments.pending]: (state) => {
      state.commentsLoading = true;
      state.comentsFailed = false;
    },
    [loadPostComments.fulfilled]: (state, action) => {
      state.commentsLoading = false;
      state.postComments = action.payload;
    },
    [loadPostComments.rejected]: (state) => {
      state.commentsLoading = false;
      state.comentsFailed = true;
    },
   },
});

export const selectPickedSubreddit = state => state.main.pickedSubreddit;
export const selectPosts = state => state.main.posts;
export const selectPostComments = (state) => state.main.postComments;
export const selectPostsLoading = (state) => state.main.postsLoading;
export const selectPostsFailed = (state) => state.main.postsFailed;
export const selectCommentsLoading = (state) => state.main.commentsLoading;
export const selectCommentsFailed = (state) => state.main.comentsFailed;
export const { pickNewSubrreddit } = mainSlice.actions;
export default mainSlice.reducer;
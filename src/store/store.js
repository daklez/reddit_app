import { configureStore } from '@reduxjs/toolkit';
import searchTermReducer from './searchTermSlice';
import subredditsReducer from './subredditsSlice';
import mainReducer from './mainSlice';

export const store = configureStore({
  reducer: {
    searchTerm: searchTermReducer,
    subreddits: subredditsReducer,
    main: mainReducer
  }
})
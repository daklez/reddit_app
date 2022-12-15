import { configureStore } from '@reduxjs/toolkit';
import searchTermReducer from './searchTermSlice';
import subredditsReducer from './subredditsSlice'

export const store = configureStore({
  reducer: {
    searchTerm: searchTermReducer,
    subreddits: subredditsReducer
  }
})
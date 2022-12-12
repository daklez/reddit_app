import { configureStore } from '@reduxjs/toolkit';
import searchTermReducer from './searchTermSlice'

export const store = configureStore({
  reducer: {
    searchTerm: searchTermReducer
  }
})
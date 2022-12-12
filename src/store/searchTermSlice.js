import { createSlice } from '@reduxjs/toolkit';

const searchTermSlice = createSlice({
  name: 'searchTerm',
  initialState: {
    term: ''
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.term = action.payload;
    }
  }
})

export const selectSearchTerm = state => state.term;
export const { setSearchTerm } = searchTermSlice.actions
export default searchTermSlice.reducer
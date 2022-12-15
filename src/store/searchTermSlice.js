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

export const selectSearchTerm = state => state.searchTerm.term;
export const { setSearchTerm } = searchTermSlice.actions
export default searchTermSlice.reducer
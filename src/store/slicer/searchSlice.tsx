import { createSlice } from '@reduxjs/toolkit';
import { SearchResult } from '../../types/lotr';

const lotrInfoInit: SearchResult = {
  searchValue: '',
};

const search = createSlice({
  name: 'lotrInfo',
  initialState: lotrInfoInit,
  reducers: {
    searchValueLotr: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});
export default search.reducer;
export const searchValueState = (state) => state.search.searchValue;
export const { searchValueLotr } = search.actions;

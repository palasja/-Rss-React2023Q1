import { createSlice } from "@reduxjs/toolkit";
import { SearchResult } from "./types/lotr";

const lotrInfoInit:SearchResult = {
  searchValue: '',
}

const lotrInfo = createSlice({
  name: 'lotrInfo',
  initialState: lotrInfoInit,
  reducers: {
    searchValueLotr: (state, action) =>{
      state.searchValue = action.payload
    },
  }
})
export default lotrInfo.reducer;
export const searchValueState = (state) => state.lotrInfo.searchValue
export const {
  searchValueLotr,

} = lotrInfo.actions
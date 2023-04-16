import { createSlice } from "@reduxjs/toolkit";
import { LotrPageInfo } from "./types/lotr";

const lotrInfoInit:LotrPageInfo = {
  searchValue: '',
  characters: [],
}

const lotrInfo = createSlice({
  name: 'lotrInfo',
  initialState: lotrInfoInit,
  reducers: {
    searchValueLotr: (state, action) =>{
      state.searchValue = action.payload
    },
    charactersLoad: (state, action) =>{
      state.characters = action.payload
    },
  }
})
export default lotrInfo.reducer;
export const searchValueState = (state) => state.lotrInfo.searchValue
export const charactersState = (state) => state.lotrInfo.characters
export const {
  searchValueLotr,
  charactersLoad,
} = lotrInfo.actions
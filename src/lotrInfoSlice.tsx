import { createSlice } from "@reduxjs/toolkit";
import { LotrPageInfo } from "./types/lotr";

const lotrInfoInit:LotrPageInfo = {
  searchValue: ' ',
  characters: [],
  fullInfo: null
}

const lotrInfo = createSlice({
  name: 'lotrInfo',
  initialState: lotrInfoInit,
  reducers: {
    seachValueLotr: (state, action) =>{
      state.searchValue = action.payload
    },
    charactersLoad: (state, action) =>{
      state.characters = action.payload
    },
    fullInfo: (state, action) =>{
      state.fullInfo = action.payload ? action.payload : null;
    }
  }
})
export default lotrInfo.reducer;
export const {
  seachValueLotr,
  charactersLoad,
  fullInfo
} = lotrInfo.actions
import { createSlice } from '@reduxjs/toolkit';
import { TypeFood, Tags, FormValues } from '../../types/item';
import { newItemInit } from '../../helper/items';

const formSlice = createSlice({
  name: 'form',
  initialState: newItemInit,
  reducers: {
    nameInput: (state, action) => {
      state.name = action.payload;
    },
    costInput: (state, action) => {
      state.cost = action.payload;
    },
    caloriesInput: (state, action) => {
      state.calories = action.payload;
    },
    weightInput: (state, action) => {
      state.weight = action.payload;
    },
    startRatingInput: (state, action) => {
      state.startRating = action.payload;
    },
    typeInput: (state, action: { payload: TypeFood | null }) => {
      state.type = action.payload;
    },
    tagsInput: (state, action: { payload: Tags[] }) => {
      state.tags = action.payload
        .toString()
        .split(',')
        .map((s) => Tags[s]);
    },
    startDateInput: (state, action) => {
      state.startDate = action.payload;
    },
    imageInput: (state, action) => {
      state.imageBlob = action.payload;
    },
    formSave: (state, action:{ payload:FormValues }) => {
      state.name = action.payload.name,
      state.cost = action.payload.cost,
      state.calories = action.payload.calories,
      state.weight = action.payload.weight,
      state.name = action.payload.name,
      state.startRating = action.payload.startRating,
      state.type = action.payload.type;
      state.tags = action.payload.tags
        .toString()
        .split(',')
        .map((s) => Tags[s]);
      state.startDate = action.payload.startDate;
      state.imageBlob = action.payload.imageBlob;
    },
    formReset: (): FormValues => newItemInit,
  },
});

export default formSlice.reducer;
export const formState = (state) => state.formSlice as FormValues;
export const {
  nameInput,
  caloriesInput,
  costInput,
  weightInput,
  startRatingInput,
  typeInput,
  tagsInput,
  startDateInput,
  imageInput,
  formReset,
  formSave
} = formSlice.actions;

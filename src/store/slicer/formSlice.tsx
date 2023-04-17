import { createSlice } from '@reduxjs/toolkit';
import { Tags, FormValues } from '../../types/item';
import { newItemInit } from '../../helper/items';

const formSlice = createSlice({
  name: 'form',
  initialState: newItemInit,
  reducers: {
    formSave: (state, action: { payload: FormValues }) => {
      (state.name = action.payload.name),
        (state.cost = action.payload.cost),
        (state.calories = action.payload.calories),
        (state.weight = action.payload.weight),
        (state.name = action.payload.name),
        (state.startRating = action.payload.startRating),
        (state.type = action.payload.type);
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
export const { formReset, formSave } = formSlice.actions;

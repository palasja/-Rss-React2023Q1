import { createSlice } from '@reduxjs/toolkit';
import { FormValues, Tags, TypeFood } from './types/item';
const a = 0
const newItem: FormValues = {
  // id: props.newCardId,
  type: null,
  name: '',
  cost: 0,
  // countPerWeek: 0,
  startRating: 0,
  calories: 0,
  // img: URL.createObjectURL(data.image[0]),
  weight: 0,
  tags: [],
  startDate: new Date(Date.now()).toISOString().slice(0,10),
};
const formSlice = createSlice({
  name: 'form',
  initialState: newItem,
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

  },
});

export default formSlice;

export const {
  nameInput,
  caloriesInput,
  costInput,
  weightInput,
  startRatingInput,
  typeInput,
  tagsInput,
  startDateInput,
} = formSlice.actions;

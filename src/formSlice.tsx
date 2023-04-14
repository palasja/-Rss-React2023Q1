import { createSlice } from '@reduxjs/toolkit'
import { FormValues } from './types/item';
const newItem: FormValues = {
  // id: props.newCardId,
  // type: data.type,
  name: '',
  cost: 0,
  // countPerWeek: 0,
  // rating: data.startRating,
  calories: 0,
  // img: URL.createObjectURL(data.image[0]),
  weight: 0,
  // tags: data.tags,
  // startSell: data.startDate,
};
const formSlice = createSlice({
  name: 'form',
  initialState: newItem,
  reducers: {
    nameInput: (state, action) => {
      state.name = action.payload
    },
    costInput: (state, action) => {
      state.cost = action.payload
    },
    caloriesInput: (state, action) => {
      state.calories = action.payload
    },
    weightInput: (state, action) => {
      state.weight = action.payload
    }
  }
});

export default formSlice

export const {
  nameInput,
  caloriesInput,
  costInput,
  weightInput
} = formSlice.actions
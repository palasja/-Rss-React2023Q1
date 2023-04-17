import { createSlice } from '@reduxjs/toolkit';
import { NewCards } from '../../types/item';

const initValue: NewCards = {
  cards: [],
};
const newCardsSlice = createSlice({
  name: 'newCards',
  initialState: initValue,
  reducers: {
    addItem: (state, action) => {
      state.cards = [...state.cards, JSON.parse(action.payload)];
    },
  },
});

export default newCardsSlice.reducer;
export const cardsState = (state) => state.newCardsSlice.cards;
export const { addItem } = newCardsSlice.actions;

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { lotrApiSlice } from './slicer/apiSlice';
import formSlice from './slicer/formSlice';
import search from './slicer/searchSlice';

const rootReduser = combineReducers({
  formSlice,
  search,
  [lotrApiSlice.reducerPath]: lotrApiSlice.reducer,
});

const store = configureStore({
  reducer: rootReduser,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(lotrApiSlice.middleware),
});

export default store;

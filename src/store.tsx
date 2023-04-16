import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { lotrApiSlice } from './apiSlice'
import formSlice from './formSlice'
import lotrInfo from './lotrInfoSlice'
const rootReduser = combineReducers({
  formSlice,
  lotrInfo,
  [lotrApiSlice.reducerPath]: lotrApiSlice.reducer
})

const store = configureStore({
  reducer: rootReduser,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(lotrApiSlice.middleware)
})


export default store
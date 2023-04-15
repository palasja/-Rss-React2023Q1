import { configureStore } from '@reduxjs/toolkit'

import { lotrApiSlice } from './apiSlice'
import formSlice from './formSlice'
import lotrInfo from './lotrInfoSlice'

const store = configureStore({
    reducer: lotrInfo
  // reducer: {
  //   // [lotrApiSlice.reducerPath]: lotrApiSlice.reducer,
  //   formSlice,
  //   // lotrInfo
  // },

})

export default store
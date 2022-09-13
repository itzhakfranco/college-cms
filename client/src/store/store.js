import { configureStore } from '@reduxjs/toolkit'
import {lecturesSlice} from './lectures.slice'

export const store = configureStore({
  reducer: {
    [lecturesSlice.name]: lecturesSlice.reducer,
  },
})
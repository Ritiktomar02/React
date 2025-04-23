import { configureStore } from '@reduxjs/toolkit'
import todoreducer from './slices/Todoslice'

export const store = configureStore({
  reducer: todoreducer
})
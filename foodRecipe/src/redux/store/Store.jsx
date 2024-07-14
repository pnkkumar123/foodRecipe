import { configureStore } from '@reduxjs/toolkit'
import { RecipeApi } from '../Slice/Slice'

export const store = configureStore({
  reducer: {[RecipeApi.reducerPath]:RecipeApi.reducer},
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(RecipeApi.middleware),
})
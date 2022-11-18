import { configureStore } from '@reduxjs/toolkit';
import dogsSlice from './slices/dogs/dogsSlice';


export const store = configureStore({
    reducer: {
        dogsSlice,
    },
  })

    export type RootState = ReturnType<typeof store.getState>
    export type AppDispatch = typeof store.dispatch
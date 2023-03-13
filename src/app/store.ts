import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { usersGridSlice } from '../components/users/usersGridSlice'
export const store = configureStore({
  reducer: {
    [usersGridSlice.reducerPath]: usersGridSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersGridSlice.middleware),
})
setupListeners(store.dispatch)
import { configureStore } from '@reduxjs/toolkit'
import { filterStateSlice } from '../redux/filterStateSlice'

const store = configureStore({
  reducer: {
    filterCategory: filterStateSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import CATEGORY from '../constants/category';

interface filterStateInterface {
  value: CATEGORY[];
}

const initialState: filterStateInterface = {
  value: [],
};

export const filterStateSlice = createSlice({
  name: 'filterStateSlice',
  initialState,
  reducers: {
    addFilterData: (state, action: PayloadAction<CATEGORY>) => {
      state.value.push(action.payload);
    },
    removeFilterData: (state, action: PayloadAction<CATEGORY>) => {
      state.value = state.value.filter(category => category !== action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addFilterData, removeFilterData } = filterStateSlice.actions
export default filterStateSlice.reducer
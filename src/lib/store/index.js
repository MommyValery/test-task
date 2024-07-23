import { configureStore } from '@reduxjs/toolkit';
import  getDataReducer from './slices/data/GetDataSlice';
import getInputReducer  from './slices/input-value/GetInputValue';

export const store = configureStore({
  reducer: {
    data: getDataReducer,
    input: getInputReducer
  },
});



import { configureStore } from '@reduxjs/toolkit';
import  getDataReducer from './slices/data/GetDataSlice';

export const store = configureStore({
  reducer: {
    data: getDataReducer
  },
});



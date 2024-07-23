import { combineReducers } from 'redux';
import { StoreSlice } from '../../const';
import { getDataSlice } from './slices/data/GetDataSlice';
import { getInputSlice } from './slices/input-value/GetInputValue';



  export const reducer = combineReducers({
    [StoreSlice.GetData]: getDataSlice.reducer,
    [StoreSlice.InputValue] : getInputSlice.reducer
  });
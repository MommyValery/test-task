import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreSlice } from '../../../../const';

export interface GetInputState {
  inputValue: number
}

const initialState : GetInputState = {
  inputValue: 0,
};


export const getInputSlice = createSlice({
  name: StoreSlice.InputValue,
  initialState,
  reducers: {
    updateInput: (state, action: PayloadAction<number>) => {
        state.inputValue = action.payload;
    }
  },
  
});

export const {updateInput} = getInputSlice.actions;
export default getInputSlice.reducer;

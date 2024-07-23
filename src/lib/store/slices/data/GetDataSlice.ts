import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreSlice } from '../../../../const';
import { AppDispatch, State, TrainData } from '../../../../types';
import { trains_data } from '../../../../mocks';

export interface GetDataState {
  trainData: TrainData[];
  isLoading: boolean;
}

const initialState : GetDataState = {
  trainData: [],
  isLoading: false,
};

export const fetchData = createAsyncThunk<TrainData[], undefined, {
  dispatch: AppDispatch;
  state: State;
}
>(StoreSlice.GetData, async () => {
  return trains_data;
});


export const getDataSlice = createSlice({
  name: StoreSlice.GetData,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action: PayloadAction<TrainData[]>) => {
        state.trainData = action.payload;
      })
}
});

export default getDataSlice.reducer;

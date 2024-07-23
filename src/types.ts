import { store } from "./lib/store";
import { GetDataState } from "./lib/store/slices/data/GetDataSlice";
import { GetInputState } from "./lib/store/slices/input-value/GetInputValue";

export type TrainData = {
  name: string;
  description: string;
  characteristics: CharacteristicData[];
};

export type CharacteristicData = {
  speed: number;
  force: number;
  engineAmperage: number;
};

export interface RootState {
  data: GetDataState
}

export interface InputState {
  inputValue: GetInputState
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
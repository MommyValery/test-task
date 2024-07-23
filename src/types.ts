import { store } from "./lib/store";
import { GetDataState } from "./lib/store/slices/data/GetDataSlice";

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

export type InputState = {
  inputValue: number | null;
}

export interface RootState {
  data: GetDataState
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
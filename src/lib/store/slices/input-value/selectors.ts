import { InputState } from "../../../../types";
import { GetInputState } from "./GetInputValue";

export const selectInputValue = (state: GetInputState) => state.inputValue;


export const getData = (state: InputState): number => {
    return state.inputValue.inputValue; 
};

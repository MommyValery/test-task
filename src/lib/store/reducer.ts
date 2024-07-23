import { combineReducers } from 'redux';
import { StoreSlice } from '../../const';
import { getDataSlice } from './slices/data/GetDataSlice';
// import { InputState } from '../../types';

// const InitialState : InputState = {
//     inputValue: null,
// }


export const updateInput = (value: number) => ({
type: 'UPDATE_INPUT',
payload: value,
});




// export const updateInputAction = (state = InitialState, action : UpdateInputAction) => {
// switch (action.type) {
//     case 'UPDATE_INPUT':
//        return {...state,
//             inputValue: action.payload
//         }
//         default:
//             return state;
// }
// }



  export const reducer = combineReducers({
    [StoreSlice.GetData]: getDataSlice.reducer,
  });
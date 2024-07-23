import { RootState, TrainData } from '../../../../types';


export const getData = (state: RootState): TrainData[] => {
    return state.data.trainData; 
};

import React, { useEffect, useState } from "react";
import "./App.css";
import MainTable from "./components/TrainTable";
import { TrainData } from "../types";
import CharacteristicTable from "./components/SpecificationTable";
import { fetchData} from "./store/slices/data/GetDataSlice";
import { getData } from "./store/slices/data/selectors";
import { useAppDispatch, useAppSelector } from "../hooks";


function App() : JSX.Element {
  const [selectedTrain, setSelectedTrain] = useState<TrainData | null>(null);
  const dispatch = useAppDispatch();
  const trains  = useAppSelector(getData); 

  const hasTrains = trains.length > 0;

  useEffect(() => {
    dispatch(fetchData()); 
  }, [dispatch]);

  const handleTrainClick = (train: TrainData) => {
    setSelectedTrain(train);
  };

  const handleModalClose = () => {
    setSelectedTrain(null);
  };

  return (
    <div className="body-type">
     {hasTrains ? (<MainTable trains ={trains} onClick={handleTrainClick} />):
     (<p>Loading data ...</p>)}

      {selectedTrain && (
        <CharacteristicTable train={selectedTrain} onSubmit={handleModalClose} />
      )}
    </div>
  );
}

export default App;

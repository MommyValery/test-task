import React, { useState } from "react";
import "./App.css";
import MainTable from "./components/TrainTable";
import { TrainData } from "../types";
import CharacteristicTable from "./components/SpecificationTable";

function App() : JSX.Element {
  const [selectedTrain, setSelectedTrain] = useState<TrainData | null>(null);

  const handleTrainClick = (train: TrainData) => {
    setSelectedTrain(train);
  };

  const handleModalClose = () => {
    setSelectedTrain(null);
  };

  return (
    <div className="body-type">
      <MainTable onClick={handleTrainClick} />

      {selectedTrain && (
        <CharacteristicTable train={selectedTrain} onSubmit={handleModalClose} />
      )}
    </div>
  );
}

export default App;

import React from "react";
import { TrainData } from "../../types";
// import { trains_data } from "../../mocks";

type Props = {
  trains : TrainData[];
  onClick: (train: TrainData) => void;
};

const MainTable = ({ trains, onClick }: Props) => {

  return (
    <table>
      <caption>Поезда</caption>
      <thead>
        <tr>
          <th id="train-name">Название</th>
          <th id="train-description">Описание</th>
        </tr>
      </thead>
      <tbody>
        {trains.map((train) => (
          <tr key={train.name} onClick={() => onClick(train)}>
            <td>{train.name}</td>
            <td>{train.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MainTable;

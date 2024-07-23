
import React, { useState } from "react";
import { InputState, TrainData } from "../../types";
import {useSelector, useDispatch} from 'react-redux';
import { updateInput } from "../store/reducer";

type Props = {
  train: TrainData;
  onSubmit: () => void;
};



 const CharacteristicTable = ({ train, onSubmit: onClose }: Props) => {
    const { name, characteristics } = train; 
    const inputValue = useSelector((state:InputState) => state.inputValue);
    const dispatch = useDispatch();
const [editedChar, setEditedChar] = useState([...characteristics]);
const [dirtyForce, setDirtyForce] = useState<boolean>(false);
const [dirtySpeed, setDirtySpeed] = useState<boolean>(false);
const [DirtyAmperage, setDirtyAmperage] = useState<boolean>(false);
const [currentForce, setForce] = useState<number |null>(null);
const [currentSpeed, setSpeed] = useState<number|null>(null);
const [currentAmperage, setAmperage] = useState<number|null>(null);

const blurHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.name === 'engineAmperage') {
        setDirtyAmperage(true)
    } else if (evt.target.name === 'speed') {
        setDirtySpeed(true)
    } else if (evt.target.name === 'force') {
        setDirtyForce(true)
    }
}

const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateInput(+evt.target.value));
    };


return (
    <form onSubmit={onClose}>
      <table id="characteristics-table">
        <caption>Характеристики</caption>
        <caption>{name}</caption>
        <thead>
          <tr>
            <th id="train-engine-amperage">Ток двигателя</th>
            <th id="train-force">Сила тяги</th>
            <th id="train-speed">Скорость</th>
          </tr>
        </thead>
        <tbody>
          {editedChar.map((char, i) => (
            <tr key={i}>
              <td>
                <input
                  type="number"
                  value={char.engineAmperage}
                  name="engineAmperage"
                  onChange={(evt) =>
                    handleInputChange(evt)
                  }
                  onBlur={(evt) => blurHandler(evt)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={char.force}
                  name="force"
                  onChange={(evt) =>
                    handleInputChange(evt)
                  }
                  onBlur={(evt) => blurHandler(evt)}
                />
              </td>
              <td>
                <input
                  type="number"
                  step={1}
                  name="speed"
                  value={char.speed}
                  onChange={(evt) =>
                    handleInputChange(evt)
                  }
                  onBlur={(evt) => blurHandler(evt)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="submit">Отправить данные</button>
    </form>
  );
}

export default CharacteristicTable;
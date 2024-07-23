
import React, { useEffect, useState } from "react";
import { TrainData } from "../../types";
import { useDispatch} from 'react-redux';
import { updateInput } from "../store/slices/input-value/GetInputValue";

type Props = {
  train: TrainData;
  onSubmit: () => void;
};

 const SpecificationTable = ({ train, onSubmit: onClose }: Props) => {
  const { name, characteristics } = train; 
  const dispatch = useDispatch();
const [editedChar, setEditedChar] = useState([...characteristics]);
const [validState, setValidState] = useState<boolean>(true);

const blurHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
  const inputValue = evt.target;
  let isValid = true;
    if (inputValue.name === 'engineAmperage' &&
       (+inputValue.value <= 0 ||
      !Number.isInteger(+inputValue.value)) ) {
    isValid = false;
    } else if (inputValue.name === 'speed' &&
      (+inputValue.value < 0 ||
     !Number.isInteger(+inputValue.value)) ) {
      isValid = false;
    } else if (inputValue.name === 'force' &&
      (+inputValue.value <= 0 ||
     Number.isInteger(+inputValue.value)) ) {
      isValid = false;
    }
    inputValue.style.backgroundColor = !isValid ? 'red' : 'white';
    setValidState(isValid);
}

useEffect(() => {
  setEditedChar([...characteristics]);
}, [characteristics]);

const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>, index: number) => {
  const {name, value} = evt.target;
  const updatedChars = [...editedChar];
  updatedChars[index] = {
    ...updatedChars[index],
    [name]: value,
  };
  setEditedChar(updatedChars);
      dispatch(updateInput(+value));
    };

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      const speedLimits = editedChar.map(char => +char.speed);
      const sortedSpeedLimits = speedLimits.sort((a, b) => a - b);
      console.log(sortedSpeedLimits);
      onClose();
    }

return (
    <form onSubmit={handleSubmit}>
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
                  type="text"
                  value={char.engineAmperage}
                  name="engineAmperage"
                  onChange={(evt) =>
                    handleInputChange(evt, i)
                  }
                  onBlur={(evt) => blurHandler(evt)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={char.force}
                  name="force"
                  onChange={(evt) =>
                    handleInputChange(evt, i)
                  }
                  onBlur={(evt) => blurHandler(evt)}
                />
              </td>
              <td>
                <input
                  type="text"
                  step={1}
                  name="speed"
                  value={char.speed}
                  onChange={(evt) =>
                    handleInputChange(evt, i)
                  }
                  onBlur={(evt) => blurHandler(evt)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="submit" disabled={!validState}>Отправить данные</button>
    </form>
  );
}

export default SpecificationTable;
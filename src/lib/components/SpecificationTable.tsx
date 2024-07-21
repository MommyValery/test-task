// import React, { useState } from "react";
// import type { TrainData } from "../../types";

// type Props = {
//   train: TrainData;
//   onSubmit: () => void;
// };

// const SpecificationTable = ({ train, onSubmit: onClose }: Props) => {
//   const { name, characteristics } = train;
//   const [editedChar, setEditedChar] = useState([...characteristics]);

//   const handleInputChange = (id: number, key: string, value: string) => {
//     const newData = editedChar.map((item, i) =>
//       i === id ? { ...item, [key]: +value } : item
//     );
//     setEditedChar(newData);
//   };
  

//   return (
//     <form onSubmit={onClose}>
//       <table id="characteristics-table">
//         <caption>Характеристики</caption>
//         <caption>{name}</caption>
//         <thead>
//           <tr>
//             <th id="train-engine-amperage">Ток двигателя</th>
//             <th id="train-force">Сила тяги</th>
//             <th id="train-speed">Скорость</th>
//           </tr>
//         </thead>
//         <tbody>
//           {editedChar.map((char, i) => (
//             <tr key={i}>
//               <td>
//                 <input
//                   type="number"
//                   value={char.engineAmperage}
//                   name="engineAmperage"
//                   onChange={(evt) =>
//                     handleInputChange(i, "engineAmperage", evt.target.value)
//                   }
//                   onBlur={(evt) => blurHandler(evt)}
//                 />
//               </td>
//               <td>
//                 {/* {(dirtyItem && editedChar)} &&  */}
//                 <input
//                   type="number"
//                   value={char.force}
//                   name="force"
//                   onChange={(evt) =>
//                     handleInputChange(i, "force", evt.target.value)
//                   }
//                   onBlur={(evt) => blurHandler(evt)}
//                 />
//               </td>
//               <td>
//                 <input
//                   type="number"
//                   step={1}
//                   name="speed"
//                   value={char.speed}
//                   onChange={(evt) =>
//                     handleInputChange(i, "speed", evt.target.value)
//                   }
//                   onBlur={(evt) => blurHandler(evt)}
//                 />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button type="submit">Отправить данные</button>
//     </form>
//   );
// };

// export default SpecificationTable;

import React, { useState } from "react";
import type { TrainData } from "../../types";

type Props = {
  train: TrainData;
  onSubmit: () => void;
};


 const CharacteristicTable = ({ train, onSubmit: onClose }: Props) => {
    const { name, characteristics } = train;  

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

const colorErrorItem = (id : number) => {
    // evt.currentTarget.toggle = 'error-item'
console.log(id);
}

const speedHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = +evt.target.value;
    console.log(currentValue)
 setSpeed(currentValue);
 if (currentValue < 0 || !Number.isInteger(currentValue)) {
 console.error('error');
 } else {
    return;
 }

}

const forceHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = +evt.target.value;
    console.log(currentValue);
    setForce(currentValue);
    if (currentValue < 0 || Number.isInteger(currentValue)) {
    console.error('error');
} else {
 return currentValue;
}
}

const amperageHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = +evt.target.value;
    setAmperage(currentValue);
    console.log(currentValue)
    if (currentValue < 0 || !Number.isInteger(currentValue)) {
    console.error('error');
}
}


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
          {characteristics.map((char, i) => (
            <tr key={i}>
              <td>
                <input
                  type="number"
                  value={char.engineAmperage}
                  name="engineAmperage"
                  onChange={(evt) =>
                    amperageHandler(evt)
                  }
                  onBlur={(evt) => blurHandler(evt)}
                />
              </td>
              <td>
                {/* {(dirtyForce && )} &&  */}
                <input
                  type="number"
                  value={char.force}
                  name="force"
                  onChange={(evt) =>
                    forceHandler(evt)
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
                    speedHandler(evt)
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
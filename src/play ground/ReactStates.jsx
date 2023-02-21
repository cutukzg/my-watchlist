import { useState } from "react";
import bat from "../img/batman.jpg";
import sup from "../img/superman.jpg";

export const ReactStates = () => {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);
  };

  const [inputName, setInputName] = useState("");
  const [overName, setOverName] = useState(0);

  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  const [image, setImage] = useState(bat);

  return (
    <>
      <img
        src={image}
        onMouseEnter={() => setImage(sup)}
        onMouseLeave={() => setImage(bat)}
        alt="img"
      />
      <h1> </h1>
      <input
        type="number"
        onChange={(e) => {
          setNum2(e.target.value ** 2);
          setNum(e.target.value);
        }}
      />
      <h1>
        Kvadrat broja {num} je {num2}
      </h1>

      <h1 onMouseOver={() => setOverName(overName + 1)}>React states</h1>
      <h2>{overName}</h2>
      <input
        type="text"
        onChange={(event) => setInputName(event.target.value)}
      />
      <h2>{inputName}</h2>
      <div>
        <u>{number}</u>
      </div>
      <button onClick={increment}>Increment by 1</button>
      <button onClick={() => setNumber(number - 1)}>Decrement by 1</button>
      <button onClick={() => setNumber(number + 2)}>Increment by 2</button>
      <button onClick={() => setNumber(0)}>Restart</button>

      <hr />
    </>
  );
};

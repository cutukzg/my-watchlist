import { useState } from "react";
import bat from "../img/batman.jpg";
import sup from "../img/superman.jpg";
import spi from "../img/spiderman.jpg";

export const ClanskaIskaznica = () => {
  const [inputName, setInputName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [image] = useState([bat, sup, spi]);
  const [imageIndex, setImageIndex] = useState(0);

  console.log(imageIndex);
  return (
    <>
      <div
        style={{
          border: "1px solid black",
          borderRadius: 8,
          width: 300,
          height: 180,
          padding: 20,
          margin: 20,
          textAlign: "left",
          display: "flex",
          alignItems: "flex-start",
          gap: 20,
        }}
      >
        <img
          src={image[imageIndex]}
          onClick={() => setImageIndex(imageIndex + 1)}
          alt=""
        />
        <div>
          <h3 style={{ marginTop: 0 }}>
            <i>Stranka</i>
          </h3>
          <div>Ime:{inputName}</div>
          <div>Prezime: {inputLastName}</div>
          <div>Dob: {inputAge}</div>
        </div>
      </div>
      <input
        type="text"
        placeholder="Upiši ime:"
        onChange={(event) => setInputName(event.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Upiši prezime:"
        onChange={(event) => setInputLastName(event.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Upiši godine:"
        onChange={(event) => setInputAge(event.target.value)}
      />
    </>
  );
};

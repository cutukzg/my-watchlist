export const Events = () => {
  const newClick = () => {
    console.log("Clicked");
  };
  const alerts = () => {
    alert("Why you click me? Press Ok or go home!");
  };
  const handleInputChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <h1 onMouseOver={() => console.log("Text hoover")}>
        ReaxtJS events - vježba
      </h1>
      <input type="text" onChange={(e) => handleInputChange(e)} />
      <button onClick={newClick}>Click on me!</button>
      <br />
      <button onClick={alerts}>Please dont click!!</button>
      <button onClick={() => alert("Test alert")}>Press alert inline</button>
    </>
  );
};

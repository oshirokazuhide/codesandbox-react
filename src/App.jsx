import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("first");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);
  const onClickButton = () => {
    setNum(num + 1);
  };
  const onClickSwichShoeFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };
  return (
    <>
      <h1 style={{ color: "red", fontStyle: "italic" }}>Hello, react</h1>
      <ColorfulMessage color="blue">How are you?</ColorfulMessage>
      <ColorfulMessage color="pink">Fine!</ColorfulMessage>

      <button onClick={onClickButton}>count up!</button>
      <br />
      <button onClick={onClickSwichShoeFlag}>on/off</button>
      <p>{num}</p>

      {faceShowFlag && <p>!(^^)!</p>}
    </>
  );
};

export default App;

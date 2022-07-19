import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();

  return (
    <>
      <h1 style={{ color: "red", fontStyle: "italic" }}>Hello, react</h1>
      <ColorfulMessage color="blue">How are you?</ColorfulMessage>
      <ColorfulMessage color="pink">Fine!</ColorfulMessage>

      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;

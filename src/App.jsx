import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert("alert");

  const contentKedyStyle = {
    color: "pink",
    fontSize: "18px",
  };
  return (
    <>
      <h1 style={{ color: "red" }}>test</h1>
      <ColorfulMessage color="blue" message="eeeee" />
      <p style={contentKedyStyle}>BBB</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
export default App;

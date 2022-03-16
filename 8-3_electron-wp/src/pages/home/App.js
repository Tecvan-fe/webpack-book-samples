import React from "react";
import { hot } from "react-hot-loader/root";
import { ipcRenderer } from "electron";

function App() {
  const handleClick = () => {
    ipcRenderer.send("win:click");
  };
  return (
    <>
      <h2>This is our React fecde!</h2>
      <button onClick={handleClick}>click</button>
    </>
  );
}

export default hot(App);

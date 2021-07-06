import React, { useState } from "react";

import Button from "./components/UI/Button";
import "./App.css";
import DemoOuPut from "./components/Demo/DemoOuput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("APP RUNNING");

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOuPut show={showParagraph}></DemoOuPut>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;

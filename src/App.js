import "./App.css";
import Button from "./components/Button";
import logoApp from "./img/logo-calculator.png";
import Screen from "./components/Screen";
import Clear from "./components/Clear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {

  const [input, setInput] = useState("");

  const addInput = value => {
    setInput(input + value);
  };

  const result = () => {
    if(input){
      setInput(evaluate(input))
    }else{
      return;
    }
  };

  return (
    <div className="App">
      <div className="logo-container">
        <img 
          src={logoApp}
          className="logo-app"
          alt="logo de la app" />
      </div>
      <div className="container-calculator">
        <Screen 
          screen={input} />
        <div className="row">
          <Button driveClick={addInput}>1</Button>
          <Button driveClick={addInput}>2</Button>
          <Button driveClick={addInput}>3</Button>
          <Button driveClick={addInput}>+</Button>
        </div>
        <div className="row">
          <Button driveClick={addInput}>4</Button>
          <Button driveClick={addInput}>5</Button>
          <Button driveClick={addInput}>6</Button>
          <Button driveClick={addInput}>-</Button>
        </div>
        <div className="row">
          <Button driveClick={addInput}>7</Button>
          <Button driveClick={addInput}>8</Button>
          <Button driveClick={addInput}>9</Button>
          <Button driveClick={addInput}>*</Button>
        </div>
        <div className="row">
          <Button driveClick={result}>=</Button>
          <Button driveClick={addInput}>0</Button>
          <Button driveClick={addInput}>.</Button>
          <Button driveClick={addInput}>/</Button>
        </div>
        <div className="row">
          <Clear driveClear={()=> setInput("")}>Clear</Clear>
        </div>
      </div>
    </div>
  );
}

export default App;

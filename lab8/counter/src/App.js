import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncrement = () => {
    setCount((prev) => prev + step);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - step);
  };

  const handleReset = () => {
    setCount(0);
    setStep(1);
  };

  return (
    <div className="container">
      <h1>Value: {count}</h1>
      <h2>Step Size: {step}</h2>
      
      <div className="input-container">
        <label>Set Value: </label>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
      </div>

      <div className="input-container">
        <label>Set Step Size: </label>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>

      <div className="button-container">
        <button className="increment" onClick={handleIncrement}>Increment</button>
        <button className="decrement" onClick={handleDecrement}>Decrement</button>
        <button className="reset" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;

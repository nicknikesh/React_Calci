import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";

const Calculator = () => {

  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clear = () => {
    setInput("");
  };

  const calculate = () => {
    try {
      const result = eval(input).toString();
      setHistory([...history, input + " = " + result]);
      setInput(result);
    } catch {
      setInput("Error");
    }
  };

  const buttons = [
    "7","8","9","/",
    "4","5","6","*",
    "1","2","3","-",
    "0",".","C","+",
    "="
  ];

  return (
    <div className="calculator">

      <Display value={input} />

      <div className="buttons">
        {buttons.map((btn) => (
          <Button
            key={btn}
            value={btn}
            onClick={() => {
              if(btn === "C") clear();
              else if(btn === "=") calculate();
              else handleClick(btn);
            }}
          />
        ))}
      </div>

      <div className="history">
        <h3>History</h3>
        {history.map((item,index) => (
          <p key={index}>{item}</p>
        ))}
      </div>

    </div>
  );
};

export default Calculator;
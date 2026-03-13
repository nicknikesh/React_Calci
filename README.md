# Ex04 Simple Calculator - React Project
## Date:13-03-2026

## AIM
To  develop a Simple Calculator using React.js with clean and responsive design, ensuring a smooth user experience across different screen sizes.

## ALGORITHM
### STEP 1
Create a React App.

### STEP 2
Open a terminal and run:
  <ul><li>npx create-react-app simple-calculator</li>
  <li>cd simple-calculator</li>
  <li>npm start</li></ul>

### STEP 3
Inside the src/ folder, create a new file Calculator.js and define the basic structure.

### STEP 4
Plan the UI: Display screen, number buttons (0-9), operators (+, -, *, /), clear (C), and equal (=).

### STEP 5
Create a new file Calculator.css in src/ and add the styling.

### STEP 6
Open src/App.js and modify it.

### STEP 7
Start the development server.
  npm start

### STEP 8
Open http://localhost:3000/ in the browser.

### STEP 9
Test the calculator by entering numbers and operations.

### STEP 10
Fix styling issues and refine content placement.

### STEP 11
Deploy the website.

### STEP 12
Upload to GitHub Pages for free hosting.

## PROGRAM
App.js
```
import React from "react";
import Calculator from "./components/Calculator";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Advanced React Calculator</h1>
      <Calculator />
    </div>
  );
}

export default App;
```
Calculator.js
```
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
```
Button.js
```
import React from "react";

const Button = ({ value, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
```
App.css
```
body{
  background:#1e1e1e;
  color:white;
  font-family:Arial;
}

.App{
  text-align:center;
}

.calculator{
  width:300px;
  margin:auto;
  background:#2d2d2d;
  padding:20px;
  border-radius:10px;
}

.display{
  width:100%;
  height:50px;
  font-size:22px;
  text-align:right;
  margin-bottom:15px;
  padding:5px;
}

.buttons{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:10px;
}

.btn{
  padding:15px;
  font-size:18px;
  border:none;
  background:#444;
  color:white;
  border-radius:5px;
  cursor:pointer;
}

.btn:hover{
  background:#ff9500;
}

.history{
  margin-top:20px;
  text-align:left;
  font-size:14px;
  max-height:120px;
  overflow:auto;
}
```
Display.js
```
import React from "react";

const Display = ({ value }) => {
  return (
    <input
      className="display"
      type="text"
      value={value}
      readOnly
    />
  );
};

export default Display;
```
## OUTPUT




## RESULT
The program for developing a simple calculator in React.js is executed successfully.

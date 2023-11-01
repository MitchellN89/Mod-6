import { useState } from "react";

import { CalculatorControlBox } from "./CalculatorControls";
import { CalculatorDisplayBox } from "./CalculatorDisplays";

function Calculator() {
  const [num1, setNum1] = useState(0),
    [num2, setNum2] = useState(0),
    [operator, setOperator] = useState("+"),
    [output, setOutput] = useState(null);

  function handleEquals() {
    if (num1 && num2) {
      switch (operator) {
        case "+":
          setOutput(parseInt(num1) + parseInt(num2));
          break;
        case "-":
          setOutput(num1 - num2);
          break;
        case "/":
          setOutput(num1 / num2);
          break;
        case "*":
          setOutput(num1 * num2);
          break;
        default:
          setOutput("Error");
      }
    }
  }

  function handleReset() {
    setNum1(0);
    setNum2(0);
    setOperator("+");
    setOutput(null);
  }

  return (
    <div className="calculator">
      <h2>Basic Calculator</h2>
      <CalculatorDisplayBox
        num1={num1}
        num2={num2}
        setNum1={setNum1}
        setNum2={setNum2}
        operator={operator}
        output={output}
      ></CalculatorDisplayBox>
      <CalculatorControlBox
        onOperatorChange={setOperator}
        onEquals={handleEquals}
        onReset={handleReset}
      ></CalculatorControlBox>
    </div>
  );
}

export default Calculator;

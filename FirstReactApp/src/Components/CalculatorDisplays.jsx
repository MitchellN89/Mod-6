function CalculatorDisplayBox({
  num1,
  num2,
  setNum1,
  setNum2,
  operator,
  output,
}) {
  return (
    <div className="calc-display">
      <CalculatorInput onValueChange={setNum1} value={num1}></CalculatorInput>
      <CalculatorOperatorDisplay
        operator={operator}
      ></CalculatorOperatorDisplay>
      <CalculatorInput onValueChange={setNum2} value={num2}></CalculatorInput>
      <CalculatorOutput output={output}></CalculatorOutput>
    </div>
  );
}

function CalculatorInput({ value, onValueChange }) {
  return (
    <input
      type="number"
      value={value}
      onChange={(evt) => {
        onValueChange(evt.target.value);
      }}
    />
  );
}

function CalculatorOutput({ output }) {
  return <div className="output">{output}</div>;
}

function CalculatorOperatorDisplay({ operator }) {
  return <div className="operator">{operator}</div>;
}

export { CalculatorDisplayBox };

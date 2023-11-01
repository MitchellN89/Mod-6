function CalculatorControlBox({ onOperatorChange, onEquals, onReset }) {
  return (
    <div className="calc-control">
      <CalcContBtn
        btnText="+"
        onOperatorChange={onOperatorChange}
      ></CalcContBtn>
      <CalcContBtn
        btnText="-"
        onOperatorChange={onOperatorChange}
      ></CalcContBtn>
      <CalcContBtn
        btnText="/"
        onOperatorChange={onOperatorChange}
      ></CalcContBtn>
      <CalcContBtn
        btnText="*"
        onOperatorChange={onOperatorChange}
      ></CalcContBtn>
      <CalcContEquals onEquals={onEquals}></CalcContEquals>
      <CalcContReset onReset={onReset}></CalcContReset>
    </div>
  );
}

function CalcContBtn({ btnText, onOperatorChange }) {
  return (
    <button value={btnText} onClick={() => onOperatorChange(btnText)}>
      {btnText}
    </button>
  );
}

function CalcContEquals({ onEquals }) {
  return (
    <button onClick={onEquals} className="equals">
      =
    </button>
  );
}

function CalcContReset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

export { CalculatorControlBox };

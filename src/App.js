import React, { useState } from "react";

const App = () => {
  const [displayValue, setdisplayValue] = useState("display");
  const clear = () => {
    setdisplayValue("0");
  };
  const displayInput = (Input) => {
    if (displayValue === "0" || displayValue === "display") {
      setdisplayValue(Input);
    } else {
      setdisplayValue(displayValue + Input);
    }
    if (displayValue.length === 17) {
      setdisplayValue("0");
    }
  };

  const handleInput = () => {
    if (displayValue === "0" || displayValue === "display") {
      setdisplayValue("0");
    } else {
      setdisplayValue(eval(displayValue));
    }
  };

  return (
    <div className="container rounded">
      <div className="row">
        <div
          className="col-12 d-flex align-items-center justify-content-center"
          id="display"
        >
          {displayValue}
        </div>
      </div>
      <div className="row">
        <button onClick={clear} className="col-6 bg-primary" id="clear">
          AC
        </button>
        <button onClick={() => displayInput("/")} className="col-3" id="divide">
          /
        </button>
        <button
          onClick={() => displayInput("*")}
          className="col-3"
          id="multiply"
        >
          x
        </button>
      </div>
      <div className="row">
        <button onClick={() => displayInput("7")} className="col-3" id="seven">
          7
        </button>
        <button onClick={() => displayInput("8")} className="col-3" id="eight">
          8
        </button>
        <button onClick={() => displayInput("9")} className="col-3" id="nine">
          9
        </button>
        <button
          onClick={() => displayInput("-")}
          className="col-3"
          id="subtract"
        >
          -
        </button>
      </div>
      <div className="row">
        <button onClick={() => displayInput("4")} className="col-3" id="four">
          4
        </button>
        <button onClick={() => displayInput("5")} className="col-3" id="five">
          5
        </button>
        <button onClick={() => displayInput("6")} className="col-3" id="six">
          6
        </button>
        <button onClick={() => displayInput("+")} className="col-3" id="add">
          +
        </button>
      </div>
      <div className="row">
        <button onClick={() => displayInput("1")} className="col-3" id="one">
          1
        </button>
        <button onClick={() => displayInput("2")} className="col-3" id="two">
          2
        </button>
        <button onClick={() => displayInput("3")} className="col-3" id="three">
          3
        </button>
        <button
          onClick={() => displayInput(".")}
          className="col-3"
          id="decimal"
        >
          .
        </button>
      </div>
      <div className="row">
        <button onClick={() => displayInput(" 0")} className="col-6" id="zero">
          0
        </button>
        <button onClick={handleInput} className="col-6 bg-warning" id="equals">
          =
        </button>
      </div>
    </div>
  );
};

export default App;

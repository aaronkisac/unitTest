import React, { useState } from "react";
import "./Double.css";

const Double = ({ initialNum = 11, calculateDouble }) => {
  
  const [num, setNum] = useState(initialNum);
  const [double, setDouble] = useState(num * 2);
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);

  const calculate = () => {
    console.log(num, double);
    const newDouble = calculateDouble(num);
    setDouble(newDouble);
  };

  const handleOnChange = (e) => {
    if (e.target.value < 0 || e.target.value > 1000) {
      setError("Please type 0 to 100");
      setDisabled(true);
    } else {
      setNum(e.target.value);
      setDisabled(false);
    }
  };


  return (
    <div id="divDouble" className="page">
      <h5 className="title1"> unit test title1</h5>
      <h5 className="title2"> unit test title2</h5>
      <div className="error">{error && <label>{error}</label>}</div>
      <input
        id="number"
        type="text"
        onChange={handleOnChange}
        defaultValue={num}
      />
      <button onClick={calculate} disabled={disabled}>
        Calculate
      </button>
      <div>
        <label>{double}</label>
      </div>
    </div>
  );
};

export default Double;

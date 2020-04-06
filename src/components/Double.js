import React, { useState } from "react";
import "./Double.css";

const Double = ({ initialNum = 11 }) => {
  const calculateDouble = () => {
    console.log(num, double);
    // API call
    setDouble(num * 2);
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

  const [num, setNum] = useState(initialNum);
  const [double, setDouble] = useState(num * 2);
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);

  return (
    <div id="divDouble" className="page">
      <h3 className="title1"> double it!  </h3>
      <h3 className="title2"> don't get afraid!</h3>
      <div className="error">{error && <label>{error}</label>}</div>
      <input
        id="number"
        type="text"
        onChange={handleOnChange}
        defaultValue={num}
      />
      <button onClick={calculateDouble} disabled={disabled}>
        Calculate
      </button>
      <div>
        <label>{double}</label>
      </div>
    </div>
  );
};

export default Double;

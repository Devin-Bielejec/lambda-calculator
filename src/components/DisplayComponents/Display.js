import React from "react";

const Display = (props) => {
  return <div className="display">
    <p className="calculatorValue">{props.startingValue}
    </p>
  </div>;
};

export {Display};
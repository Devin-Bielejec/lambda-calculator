import React from "react";

const Display = (props) => {
  return <div className="display">
    <div className="calculatorValue">{props.startingValue}
    </div>
  </div>;
};

export {Display};
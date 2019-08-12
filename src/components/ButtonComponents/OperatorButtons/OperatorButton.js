import React from "react";

const OperatorButton = (props) => {
  return (
    <button className="Operator" value={props.value}>
      {props.char}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export {OperatorButton};

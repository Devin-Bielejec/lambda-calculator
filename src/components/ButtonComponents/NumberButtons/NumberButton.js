import React from "react";
// import { prependOnceListener } from "cluster";

const NumberButton = (props) => {
  return (
    <button>
      {props.number}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export {NumberButton};
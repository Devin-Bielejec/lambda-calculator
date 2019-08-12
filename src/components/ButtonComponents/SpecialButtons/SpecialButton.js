import React from "react";

const SpecialButton = (props) => {
  return (
    <button className="Special">
      {props.char}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export {SpecialButton};

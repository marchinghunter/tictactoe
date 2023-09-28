import React from "react";
import { useState } from "react";

const Box = ({ value, changeState }) => {
  const currentClass = value === 'X'?'box-x':'box-o';
  return (
      
        <button className={`smallbox ${currentClass}`} onClick={changeState}>
          {value}
        </button>
  );
};

export default Box;

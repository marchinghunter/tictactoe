import React from "react";
import Box from "./Box";
import '../Style/Box.css'

const Gameboard = ({ boxValue, changeValue }) => {
    
  return (
    <>
      <div className="parent">
        {boxValue.map((value,key) => (
          <Box value={value} changeState={()=>changeValue(key)} key={key}/>
        ))}
      </div>
    </>
  );
};

export default Gameboard;

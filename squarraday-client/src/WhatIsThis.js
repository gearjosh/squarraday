import React from "react";

function WhatIsThis(props) { 

  const whatIsThisStyle = {
    height: `${props.square.size * props.square.sizeMultiplier}vw`,
    display: "block",
    gridColumnStart: "1",
    gridColumnEnd: "3",
    gridRowStart: "1",
    gridRowEnd: "3",
    overflow: "hidden",
    cursor: "pointer"
  }

  const imgStyle = {
    objectFit: "cover",
    width: "100%",
    height: "100%"
  }

  return (
    <div
      style={whatIsThisStyle} >
      <img
        style={imgStyle}
        src={props.square.img} 
        alt={props.square.alt}
      />
    </div>
  )
}

export default WhatIsThis;

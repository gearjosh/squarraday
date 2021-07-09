import React from "react";

function CopyrightMe(props) { 

  const copyrightMeStyle = {
    height: `${props.square.size * props.square.sizeMultiplier}vw`,
    display: "block",
    gridColumnStart: "14",
    gridColumnEnd: "15",
    gridRowStart: "1",
    gridRowEnd: "2",
    overflow: "hidden",
    cursor: "pointer"
  }

  const imgStyle = {
    objectFit: "cover",
    width: "100%",
    height: "100%"
  }

  return (
    <div style={copyrightMeStyle}
      onClick={props.onClick}
    >
      <img style={imgStyle} src={props.square.img} alt={props.square.alt} />
    </div>
  );
}

export default CopyrightMe;

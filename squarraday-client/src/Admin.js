import React from "react";

function Admin(props) {  

  const adminContainerStyle = {
    height: `${props.square.size * props.square.sizeMultiplier}vw`,
    display: "block",
    gridColumnEnd: Math.floor(Math.random() * 14) + 1,
    gridRowEnd: "7",
    overflow: "hidden",
    // cursor: "pointer"
  };

  const imgStyle = {
    objectFit: "cover",
    width: "100%",
    height: "100%"
  }

  return (
    <div
      style={adminContainerStyle}
      onClick={props.onClick} >
      <img 
        style={imgStyle} 
        src={props.square.img} 
        alt={props.square.alt} />
    </div>
  );
}

export default Admin;

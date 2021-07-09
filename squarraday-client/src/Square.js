import "./hoverText.css";
import React from "react";

function Square(props) {
  const squareStyle = {
    height: `${props.gridSize}vw`,
    display: "block",
    gridColumnEnd: `span ${props.size}`,
    gridRowEnd: `span ${props.size}`,
    overflow: "hidden",
  };


  const imgStyle = {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  };

  if (props.guestArtist === true && props.hoverText.length >= 1) {
    return (
      <div style={squareStyle} >
        <img style={imgStyle} src={props.img} alt={props.alt} title={props.hoverText} />
      </div>
    );
  }
  return (
    <div style={squareStyle}>
      <img style={imgStyle} src={props.img} alt={props.alt} title={props.title} />
    </div>
  );
}

export default Square;

import React from "react";

function IsleOfMovies(props) { 

  const isleOfMoviesStyle = {
    height: `${props.square.size * props.square.sizeMultiplier}vw`,
    display: "block",
    gridColumnStart: "13",
    gridColumnEnd: "15",
    gridRowStart: "3",
    gridRowEnd: "5",
    overflow: "hidden"
  }

  const imgStyle = {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  }



  return (
    <div style={isleOfMoviesStyle}>
      <a
        href="https://letterboxd.com/otherjosh/"
        target="_blank"
        rel="noreferrer"
      >
        <img style={imgStyle} src={props.square.img} alt={props.square.alt} />
      </a>
    </div>
  );
}

export default IsleOfMovies;

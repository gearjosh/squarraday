import styled from "styled-components";
import React from "react";

function IsleOfMovies(props) { 
  console.log(props); 

  const IsleOfMoviesContainer = styled.div`
    height: ${props.square.size * props.square.sizeMultiplier}vw;
    display: block;
    grid-column-start: 13;
    grid-column-end: 15;
    grid-row-start: 3;
    grid-row-end: 5;
    overflow: hidden;
  `;

  const Img = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
  `;

  return (
    <IsleOfMoviesContainer>
      <Img 
        src={props.square.img} 
        alt={props.square.alt}
      />
    </IsleOfMoviesContainer>
  );
}

export default IsleOfMovies;

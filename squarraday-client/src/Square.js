import styled from "styled-components";
import React, { useState } from "react";

function Square(props) {

  const SquareContainer = styled.div`
    height: ${props.gridSize}vw;
    display: block;
    grid-column-end: span ${props.size};
    grid-row-end: span ${props.size};
    overflow: hidden;
    /* grid-gap: 1rem; */
  `;

  const Img = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
  `;

  return (
    <SquareContainer>
      <Img src={props.img} alt={props.alt}/>
    </SquareContainer>
  );
}

export default Square;

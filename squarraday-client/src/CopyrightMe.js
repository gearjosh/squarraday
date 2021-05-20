import styled from "styled-components";
import React from "react";

function CopyrightMe(props) { 

  const CopyrightMeContainer = styled.div`
    height: ${props.square.size * props.square.sizeMultiplier}vw;
    display: block;
    grid-column-start: 14;
    grid-column-end: 15;
    grid-row-start: 1;
    grid-row-end: 2;
    overflow: hidden;
    cursor: pointer;
  `;

  const Img = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
  `;

  return (
    <CopyrightMeContainer
      onClick={props.onClick}
    >
      <Img src={props.square.img} alt={props.square.alt} />
    </CopyrightMeContainer>
  );
}

export default CopyrightMe;

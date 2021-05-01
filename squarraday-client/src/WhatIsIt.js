import styled from "styled-components";
import React from "react";

function WhatIsIt(props) { 
  console.log(props); 

  const WhatIsItContainer = styled.div`
    height: ${props.square.size * props.square.sizeMultiplier}vw;
    display: block;
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
    overflow: hidden;
  `;

  const Img = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
  `;

  return (
    <WhatIsItContainer>
      <Img 
        src={props.square.img} 
        alt={props.square.alt}
      />
    </WhatIsItContainer>
  );
}

export default WhatIsIt;

import styled from "styled-components";
import React from "react";

function Admin(props) {  

  const AdminContainer = styled.div`
    height: ${props.square.size * props.square.sizeMultiplier}vw;
    display: block;
    grid-column-end: 12;
    grid-row-end: 7;
    overflow: hidden;
    cursor: pointer;
  `;

  const Img = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
  `;

  return (
    <AdminContainer
      onClick={props.onClick}
    >
      <Img src={props.square.img} alt={props.square.alt} />
    </AdminContainer>
  );
}

export default Admin;

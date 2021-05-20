import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import squareService from "./services/squareService";

import Square from "./Square";
import WhatIsThis from "./WhatIsThis";
import IsleOfMovies from "./IsleOfMovies";
import CopyrightMe from "./CopyrightMe";
import Admin from "./Admin";

Modal.setAppElement("#root");

function App() {
  const sizeMultiplier = 7;
  const [squares, setSquares] = useState(null);
  const [specials, setSpecials] = useState(null);
  const [normals, setNormals] = useState(null);
  const [copyrightModalIsOpen, setCopyrightModalIsOpen] = useState(false);
  const [adminModalIsOpen, setAdminModalIsOpen] = useState(false);

  useEffect(() => {
    if(!squares) {
      getSquares();
      console.log('squares: ', squares)
    }
  });
  
  const getSquares = async () => {
    let res = await squareService.getAll();
    console.log('res: ', res);
    setSpecials(extractSpecials(res));
    setNormals(dumpSpecials(res));
    setSquares(res);
  };

  const extractSpecials = (ary) => {
    const specialArray = [];
    ary.forEach((e) => {
      if (e.special === true) {
        specialArray.push(e);
      }
    });
    return specialArray;
  };

  const dumpSpecials = (ary) => {
    const normalArray = [];
    ary.forEach(e => {
      if (e.special !== true) {
        normalArray.push(e);
      }
    })
    return normalArray;
  };

  const openCopyrightModal = () => {
    console.log('copyrightModalIsOpen: ', copyrightModalIsOpen)
    setCopyrightModalIsOpen(true);
    console.log("copyrightModalIsOpen: ", copyrightModalIsOpen);
  };

  const closeCopyrightModal = () => {
    setCopyrightModalIsOpen(false);
  };

  const openAdminModal = () => {
    console.log("adminModalIsOpen: ", adminModalIsOpen);
    setAdminModalIsOpen(true);
    console.log("adminModalIsOpen: ", adminModalIsOpen);
  };

  const closeAdminModal = () => {
    setAdminModalIsOpen(false);
  };

  const shuffle = (ogArray) => {
    const array = JSON.parse(JSON.stringify(ogArray));
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${sizeMultiplier}vw, 1fr));
    /* grid-auto-rows: 1fr; */
    grid-auto-flow: dense;
  `;

  const modalStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  

  let condish1 = null;
  let condish2 = null;
  let condish3 = null;
  let condish4 = null;

  if (specials) {
    condish1 = (
      <WhatIsThis
        square={specials.find(s => s.title === "what is this")}
        sizeMultiplier={sizeMultiplier}
      />
    );
    condish2 = (
      <IsleOfMovies
        square={specials.find(s => s.title === "isle of movies")}
        sizeMultiplier={sizeMultiplier}
      />
    );
    condish3 = (
      <CopyrightMe
        square={specials.find((s) => s.title === "copyright me")}
        sizeMultiplier={sizeMultiplier}
        onClick={openCopyrightModal}
      />
    );
    condish4 = (
      <Admin
        square={specials.find((s) => s.title === "eyes")}
        sizeMultiplier={sizeMultiplier}
        onClick={openAdminModal}
      />
    );
  } 

  return (
    <Grid>
      {condish1}
      {condish2}
      {condish3}
      {condish4}

      <Modal isOpen={copyrightModalIsOpen} style={modalStyle}>
        <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">
          <img
            alt="Creative Commons License"
            style={{ borderWidth: 0 }}
            src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png"
          />
        </a>
        <br />
        <br />
        All these pictures are licensed under the{" "}
        <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">
          Creative Commons Attribution-NonCommercial 4.0 International License
        </a>
        .
        <br />
        The copyright symbol was technically misdirection.
        <br />
        <br />
        <button onClick={closeCopyrightModal}>Cool</button>
      </Modal>

      <Modal isOpen={adminModalIsOpen} style={modalStyle}>
        <button onClick={closeAdminModal}>Cool</button>
      </Modal>

      {normals === null ? (
        <p>Loading...</p>
      ) : normals.length === 0 ? (
        <p>No squares available.</p>
      ) : (
        shuffle(normals).map((obj) => {
          return (
            <Square
              img={obj.img}
              title={obj.title}
              alt={obj.alt}
              guestArtist={obj.guestArtist}
              available={obj.available}
              size={obj.size}
              key={obj.title}
              gridSize={obj.size * sizeMultiplier}
            />
          );
        })
      )}
    </Grid>
  );
}

export default App;

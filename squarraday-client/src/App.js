import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Square from "./Square";
import WhatIsThis from "./WhatIsThis";
import IsleOfMovies from "./IsleOfMovies";
import squareService from "./services/squareService";

function App() {
  const sizeMultiplier = 7;
  const [squares, setSquares] = useState(null);
  const [specials, setSpecials] = useState(null);
  const [normals, setNormals] = useState(null);

  useEffect(() => {
    if(!squares) {
      getSquares();
      console.log('squares: ', squares)
    }
  });
  
  const getSquares = async () => {
    console.log("in getSquares");
    let res = await squareService.getAll();
    console.log('res: ', res);
    setSquares(res);
    setSpecials(extractSpecials(res));
    setNormals(dumpSpecials(res));
  };

  const extractSpecials = (ary) => {
    const specialArray = [];
    ary.forEach((e) => {
      if (e.special === "true") {
        specialArray.push(e);
      }
    });
    return specialArray;
  };

  const dumpSpecials = (ary) => {
    const normalArray = [];
    ary.forEach(e => {
      if (e.special !== "true") {
        normalArray.push(e);
      }
    })
    return normalArray;
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

  let condish1 = null;
  let condish2 = null;
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
  } 

  return (
    <Grid>
      {condish1}
      {condish2}

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

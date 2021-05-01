import styled from "styled-components";
import React, { useState, useEffect } from "react";
// import axios from "axios";
import Square from "./Square";
import squareService from "./services/squareService";

function App() {
  const sizeMultiplier = 7;
  const [squares, setSquares] = useState(null);

  useEffect(() => {
    if(!squares) {
      console.log('in the useEffect');
      getSquares();
    }
  });

  const getSquares = async () => {
    console.log("in getSquares");
    let res = await squareService.getAll();
    console.log('res: ', res);
    setSquares(res);
  };

  const renderSquare = (square) => {
    return (
      <li key={square.title} className="list__item square">
        <h3 className="square__name">{square.title}</h3>
        <p className="square__description">{square.alt}</p>
      </li>
    )
  }

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


  return (
    // <Grid>

    //   { squares === null ? (
    //     <p>Loading...</p>
    //   ) : squares.length === 0 ? (
    //     <p>No squares available.</p>
    //   ) : (
    //     shuffle(squares).map((obj, i) => {
    //       return (
    //         <Square
    //           img={obj.img}
    //           alt={obj.title}
    //           guestArtist={obj.guestArtist}
    //           size={obj.size}
    //           key={i}
    //           gridSize={obj.size * sizeMultiplier}
    //         />
    //       );
    //     })
    //   )}
    // </Grid>

    <div className="App">
      <ul className="list">
        {(squares && squares.length > 0) ? (
          squares.map(square => renderSquare(square))
        ) : (
          <p>No squares found</p>
        )}
      </ul>
    </div>
  );
}

export default App;

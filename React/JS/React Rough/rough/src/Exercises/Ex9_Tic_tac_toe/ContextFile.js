import React, { useState } from 'react'

export const TicTacToeContext = React.createContext()
const nullArr = Array.from({ length: 9 }, () => null);

const ContextFile = ({ children }) => {
  const [xTurn, setXTurn] = useState(true);//define whose turn universily 
  const [currentArray, setcurrentArray] = useState(nullArr); //all moves result will store here
  const [pastMoves, setpastMoves] = useState([nullArr])
  const [isWinner, setIsWinner] = useState(null);

  const storeMoves = (currentMoveArray) => {
    const tempArr = [...pastMoves];
    tempArr.push(currentMoveArray);
    setpastMoves(tempArr);
  }
  const gameOnPlay = (index) => { //to fill X and  O response in array (isXturn is boolean param and index is prop value of square button)
    const tempArr = [...currentArray];
    if (xTurn) {
      tempArr[index] = 'X'
      setXTurn(false);
      setcurrentArray(tempArr)
      storeMoves(tempArr);
      setIsWinner(calculateWinner(tempArr));
    }
    else {
      tempArr[index] = 'O'
      setXTurn(true);
      setcurrentArray(tempArr)
      storeMoves(tempArr);
      setIsWinner(calculateWinner(tempArr));
    }
  }

  const turnToggle = (index) => {
    if ((index % 2)) {
      setXTurn(false)
    }
    else { setXTurn(true) }
  }

  const gotoPastMoveHandler = (pastMoveIndex) => { //this will called when PastMoves component btns will be clicked
    if (!isWinner) {
      const tempRemoverArry = [...pastMoves];
      const newArray = tempRemoverArry.slice(0, pastMoveIndex + 1)
      setpastMoves(newArray);
      setcurrentArray(newArray[pastMoveIndex]);
      turnToggle(pastMoveIndex)
      // setIsWinner('');
    }
    else {
      turnToggle(pastMoveIndex)
      setcurrentArray(pastMoves[pastMoveIndex]);

    }
  }

  function calculateWinner(moves) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (moves[a] && moves[a] === moves[b] && moves[a] === moves[c]) {
        return moves[a];
      }
    }
    return null;
  }
  return (
    <TicTacToeContext.Provider value={{ isWinner, setIsWinner, calculateWinner, xTurn, setXTurn, currentArray, setcurrentArray, gameOnPlay, pastMoves, setpastMoves, gotoPastMoveHandler }}>
      {children}
    </TicTacToeContext.Provider>
  )
}
export default ContextFile;
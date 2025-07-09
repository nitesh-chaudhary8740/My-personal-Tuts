import React, { useContext } from 'react'
import { TicTacToeContext } from './ContextFile'

const Status = () => {
    const {xTurn,isWinner} = useContext(TicTacToeContext);
    let turnOf = xTurn? 'X' : 'O';


   return <div>
     {isWinner ?  `the Winner is ${isWinner}!`:`This is turn of - ${turnOf}`}
    </div>
  
}

export default Status

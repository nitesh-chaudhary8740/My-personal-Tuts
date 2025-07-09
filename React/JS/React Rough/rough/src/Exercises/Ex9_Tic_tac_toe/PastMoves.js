import React, { useContext } from 'react'
import { TicTacToeContext } from './ContextFile'

const PastMoves = () => {
    const {pastMoves,gotoPastMoveHandler} = useContext(TicTacToeContext);
  return (
    <div>
     {pastMoves.map((_,moveIndex)=>(<button key = {`move-key-${moveIndex}`} onClick={()=>gotoPastMoveHandler(moveIndex)}>{`Move-${moveIndex}`}</button>))}
    </div>
  )
}

export default PastMoves

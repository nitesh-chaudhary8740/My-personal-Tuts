import React from 'react'
import ContextFile from './ContextFile'
import Board from './Board'
import PastMoves from './PastMoves'
const TTTWrapper = () => {
  return (
    <ContextFile>
        <Board/>
        <PastMoves/>
    </ContextFile>
  )
}

export default TTTWrapper;

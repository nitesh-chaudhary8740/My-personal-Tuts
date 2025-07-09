import React, { useContext } from 'react'
import Squares from './Squares'
import { TicTacToeContext } from './ContextFile'
import Status from './Status'

const Board = () => {
    const { currentArray } = useContext(TicTacToeContext) //this is wrong Context file isn't loaded yet so cannot co
    return (
        <div className='Main Container'>
            <div className='gameStatus'>
                <Status />
            </div>
            <div className='board'>
                {
                    currentArray.map((ele, index) => (<Squares value={index} element={ele} key={`sq-${index}`} />))
                }
            </div>
        </div>
    )
}
export default Board

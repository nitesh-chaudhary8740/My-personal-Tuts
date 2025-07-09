import React, { useContext} from 'react'
import { TicTacToeContext } from './ContextFile';

const Squares = ({ element, value }) => { //these prop passed to the param of movesArry.map() element is passed
    const { gameOnPlay,currentArray,calculateWinner} = useContext(TicTacToeContext);//xtrn = true initially
   
    const squareClickHandler = () => {
        let winner = calculateWinner(currentArray)
        if(!currentArray[value] && !winner){
            gameOnPlay(value);
        }
    }
    return (
        <button className='squares' onClick={squareClickHandler}>{element}</button>
    )
}

export default Squares

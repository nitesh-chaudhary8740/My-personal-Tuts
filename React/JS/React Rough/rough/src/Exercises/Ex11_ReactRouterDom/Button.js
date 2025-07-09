import React, { useContext } from 'react'
import { TheContext } from './ContextProvider'


const Button = () => {
    const {dispatcher} =useContext(TheContext);
  
  return (
    <div>
      <button onClick={()=>{
        dispatcher({type:'INC'})
      }}>Increment+</button>
      {'  '}

      <button onClick={()=>{
        dispatcher({type:'RESET'})
      }} >Reset</button>
      {'  '}
      <button onClick={()=>{
        dispatcher({type:'DEC'})
      }}>Decrement--</button>
    </div>
   
  )
}

export default Button

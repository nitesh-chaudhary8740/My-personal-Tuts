import React, { useState } from 'react'

const Button = (props) => {
    const {count,setCount} = props;
    const btnHandler = () => {
        setCount(prev=>prev+1)
    }
  return (
   <button onClick={btnHandler}>clicked {count} times</button>
  )
}

export default Button

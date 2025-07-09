import React, { useEffect, useState } from 'react'

export default function UseEffect_tut() {
    const [value, setValue] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        // setValue(prevValue => prevValue + 1); 
        setValue((prevValue) => {return prevValue + 1})//this is equivalent to above line
        // setValue(value + 1); 
      }, 1000);
  
      // Cleanup function to clear the interval when the component unmounts
      return () => clearInterval(intervalId); 
    }, []);
  return (
    <div>
      value is {value}
    </div>
  )
}

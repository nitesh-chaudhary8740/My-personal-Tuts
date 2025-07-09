
import React, { useState, useEffect } from 'react';

 export default function Counter() {
  const [count, setCount] = useState(0);
  let tempLocalEnvVariable = process.env.REACT_APP_TEMP_LOCAL_VARIABLE;
  console.log(tempLocalEnvVariable)

  useEffect(() => {
    console.log('Effect function called');

    const timerId = setInterval(() => {
      setCount(count + 1);
    
    }, 1000);

    return () => {
      console.log('Cleanup function called');
      clearInterval(timerId);
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count} and temp: {tempLocalEnvVariable}</p>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

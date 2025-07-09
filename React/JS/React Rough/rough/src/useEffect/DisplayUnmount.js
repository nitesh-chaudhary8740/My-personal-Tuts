import React, { useState } from 'react';
import Counter from './Counter';


export default function DisplayUnmount() {
  const [showCounter, setShowCounter] = useState(true);

  return (
    <div>
      {showCounter && <Counter/>}
      <button onClick={() => setShowCounter(!showCounter)}>Toggle Counter</button>
    </div>
  );
}
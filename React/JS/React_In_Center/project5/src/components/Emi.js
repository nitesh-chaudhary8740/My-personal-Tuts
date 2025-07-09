
import React, { useState } from 'react';

// const MAX_VALUE = Number.MAX_SAFE_INTEGER;

export default function Emi() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);

  return (
    <>
    <div className='container'>

    <div className="slidecontainer1">
        Amount: 
      <input  type="range" min="10000" max="99999" value={value1} className="slider"  id="myRange1"onChange={(e) => setValue1(e.target.value)}/>
      <span>{value1}</span>
    </div>
    
    <div className="slidecontainer2">
        Tenure:
      <input  type="range" min="0" max="50" value={value2} className="slider"  id="myRange2"onChange={(e) => setValue2(e.target.value)}/>
      <span>{value2}</span>
    </div>
 
    <div className="slidecontainer3">
    Rate: 
      <input  type="range" min="0" max="50" value={value3} className="slider"  id="myRange3"onChange={(e) => setValue3(e.target.value)}/>
      <span>{value3}</span>
    </div>
    <div>
        <button onClick={()=>{
            document.getElementById('cal').style.display='block'
        }}>calculate</button>
    </div>
    <div className='calculate' id='cal'>
        Intrest is: {value1*value2*value3/100}
    </div>
    </div>
    </>

  );
}

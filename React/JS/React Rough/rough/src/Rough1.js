import React,{ useState } from 'react'

const Rough1 = () => {
 const [a, setA] =useState(true);
 const [b, setB] =useState(false);
const handler = () =>{
  if(a){
    console.log('A is true')
    setB(true);
    if(b){
      console.log('b is true')
    }
  }
}
  return (
    <div>
    
    </div>
  );
}

export default Rough1

import React, { useEffect, useState } from 'react';
import LoadingData from './LoadingData';

export default function InfinityScroll() {
  const length = 100;
  const loadingIndex = 10;
  const [displayLoadingIndicator,setDisplayLoadingIndicator]=useState('false')
 const array= Array.from({ length: length })//creating and empty array with the given length
 
 useEffect(()=>{

 },[])
  return (
    <div>
      {array.map((_, index) => (
        <LoadingData key={index+1} index={index+1} />
      ))}
    </div>
  );
}
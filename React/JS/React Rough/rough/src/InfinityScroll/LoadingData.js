import React, { useEffect } from 'react'
import '../Css/LoadingData.css'
import LoadingIndicator from './LoadingIndicator';

export default function LoadingData(props) {
    let {index,displayLoadingIndicator,setDisplayLoadingIndicator} =props
    const observer = new IntersectionObserver((entries)=>{
      if(entries[0].isIntersecting);
      {console.log(entries[0]);
      // entries[0].style.color='red';
      }
     },{threshold:1.0,})
useEffect(()=>{})
  return (
    <>
    <div className='DataCont' id={`box-${index}`}>
      container-{index}
    </div>
  { displayLoadingIndicator && <LoadingIndicator/>}
    </>
  )
}

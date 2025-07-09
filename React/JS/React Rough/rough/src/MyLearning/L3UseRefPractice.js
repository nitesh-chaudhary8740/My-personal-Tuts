import React, { useEffect, useRef, useState } from 'react'
// import Img from '../Images/vecteezy_tree-png-graphic-clipart-design_19607536.png'
// const Mycomponent = () =>{
//     const inpRef = useRef('')
//     const btnHandler = () =>{
//         inpRef.current.focus()
//     }
//     return (
//         <div>
//             <input type="text" ref={inpRef}/>
//             <button onClick={btnHandler}>Click</button>
//         </div>
//     )
// }
// const Mycomponent = () => {
//     const inpRef = useRef(null);
//     const [text, setText] = useState('');

//     const onChangeHandler = () => {
//       if (inpRef.current) {
//         inpRef.current.style.height = 'auto';
//         inpRef.current.style.height = inpRef.current.scrollHeight + 'px';
//       }
//     };

//     return (
//       <div>
//         <textarea
//           ref={inpRef}
//           placeholder="Enter text here"
//           value={text}
//           onChange={(event) => {
//             setText(event.target.value);
//             onChangeHandler();
//           }}
//         />
//       </div>
//     );
//   };
// const Mycomponent = () => {
//   const timerId = useRef(null);
//   const [time, setTime] = useState(10);
//   useEffect(() => {
//     timerId.current = setInterval(() => {
//       if (time > 0) {
//         setTime(prev => prev - 1)
//       }
//       else {
//         clearInterval(timerId.current)
//       }
//     }, 1000);
//     return () => {
//       clearInterval(timerId.current)
//     }

//   }, [time])

//   return (
//     <div>
//       {'Time ' + time}
//     </div>
//   );
// };
// const Mycomponent = () => {
//   const timerId = useRef(null);
//   const [text, setText] = useState('');
//   useEffect(() => {
//    timerId.current = setTimeout(() => {
//     console.log(text);
//    }, 3000);
//    return ()=>{ clearTimeout(timerId.current)}
//   }, [text])

//   return (
//     <div>
//       <div>
//       {'Text: '+text}
//         </div> 
//       <input type='text' value={text} onChange={(event)=>{
//         clearTimeout(timerId.current)
//         setText(event.target.value)
//       }}/>
//     </div>
//   );
// };
// const L3UseRefPractice = () => {
//   return (
//     <div>
//       <Mycomponent />
//     </div>
//   )
// }
// const Mycomponent = () => {
//   const imgRef = useRef(null);
//   const handleImageLoad = () => {
//     try {
//       if(imgRef.current){
//         console.log('height: ', imgRef.current.offsetHeight);
//         console.log('width: ', imgRef.current.offsetWidth);
//         }
//         else{
//           console.log('imgRef.curret is still null or not assigned yet')
//         }
//     } catch (error) {
//       console(error)
//     }
  
//     // Run other statements here
//   };
//   return (
//     <div>
//       <img src={Img} ref={imgRef} onLoad={handleImageLoad}/>
      
//     </div>
//   );
// };
// import React, { useRef, useEffect } from 'react';
const ScrollableDiv = () => {
  const scrollableDivRef = useRef(null);
  const scrollPositionRef = useRef(0);
  const [verticalScrollPositon,setVerticalScrolPosition]=useState(0);
  

  useEffect(() => {
    if (scrollableDivRef.current) {
      const handleScroll = () => {
        scrollPositionRef.current = scrollableDivRef.current.scrollTop;
        console.log('event: ',scrollPositionRef.current)
        setVerticalScrolPosition(scrollPositionRef.current);
        // scrollPositionDisplayRef.current.innerText = scrollPositionRef.current; //if don't need rendering
      };
  
      const handleRestoreScrollPosition = () => {///WHAT IF I COMMENT THIS FUNCTION
        if (scrollableDivRef.current) {
          scrollableDivRef.current.scrollTop = scrollPositionRef.current;
          console.log('reset on mount : ',scrollPositionRef.current);
 
        }
      };
  
      scrollableDivRef.current.addEventListener('scroll', handleScroll);
  
      handleRestoreScrollPosition(); //WHAT IF I COMMENT THIS TOO
  
      return () => {
        if(scrollableDivRef.current){
        scrollableDivRef.current.removeEventListener('scroll', handleScroll);
      };
    }
    }
  }, [scrollableDivRef]);
  return (
    <>
<div
      ref={scrollableDivRef}
      style={{
        height: '200px',
        width:'100%',
        border: '2px solid',
        overflowY: 'auto',
      }}
    >
      {Array(20)
        .fill(0)
        .map((_, index) => (
          <p style={{
            margin:'1vh',
            border: '2px solid',
           
          }} key={index}>This is paragraph {index + 1}</p>
        ))}
    </div>
    <div>{verticalScrollPositon}</div>
    </>
  );
};
const L3UseRefPractice = () => {
  return (
    <div>
      <ScrollableDiv/>
    </div>
  )
}

export default L3UseRefPractice

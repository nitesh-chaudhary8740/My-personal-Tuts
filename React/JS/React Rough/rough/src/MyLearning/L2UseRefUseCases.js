import React, { useRef,useEffect } from 'react';

// function MyComponent() {
//   const inputRef = useRef(null);

//   const handleClick = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <input ref={inputRef} type="text" />
//       <button onClick={handleClick}>Focus on input</button>
//     </div>
//   );
// }//#1st



// function MyComponent() {
//   const textAreaRef = useRef(null);

//   const handleSelectText = () => {
//     textAreaRef.current.select();//it will select the entire value of current referenced element's
//   };

//   return (
//     <div>
//       <textarea ref={textAreaRef} value="Hello, World!" />
//       <button onClick={handleSelectText}>Select text</button>
//     </div>
//   );
// } //#2



// function MyComponent() {
//   const timerIdRef = useRef(null);

//   useEffect(() => {
//     timerIdRef.current = setInterval(() => {
//       console.log('Timer ticked!');
//     }, 1000);
//     return () => {
//       clearInterval(timerIdRef.current);
//     };
//   }, []);

//   return <div>Timer is running!</div>;
// } #3 


function MyComponent() {
  const divRef = useRef(null);

  const handleMeasure = () => {
    const rect = divRef.current.getBoundingClientRect();
    console.log(rect.width, rect.height);
  };

  return (
    <div>
      <div ref={divRef}>Hello, World!</div>
      <button onClick={handleMeasure}>Measure div</button>
    </div>
  );
}
const L2UseRefUseCases = () => {
  return (
    <div>
      <MyComponent/>
    </div>
  )
}

export default L2UseRefUseCases

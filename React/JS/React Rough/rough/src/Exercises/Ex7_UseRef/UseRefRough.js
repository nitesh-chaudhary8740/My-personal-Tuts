import React, { useRef, useEffect } from 'react';

const UseRefRough = () => {
  const refs = useRef([]);
    let x=0;
  const refProviderHandler1 = (el) => {
    if(el && !refs.current.includes(el)){
        
        refs.current[refs.current.length] = el;
        console.log('ref arr: ',refs.current)
    }
  };
//   const refProviderHandler2 = (el) => {
//     refs.current.push(el)
//     console.log('ref arr: ',refs.current)
//   };
  console.log('Rendering component...',x+1);

  useEffect(() => {
    console.log(refs.current, 'len', refs.current.length);
  }, []);

  return (
    <div>
      <input type="text" ref={refProviderHandler1} />
      <input type="text" ref={refProviderHandler1} />
      <div ref={refProviderHandler1}>dhsjaggfjd</div>
      <div ref={refProviderHandler1}>dhsjaggfjd</div>
      {/* <div ref={refProviderHandler1}>dhsjaggfjd</div> */}
    </div>
  );
};

export default UseRefRough;
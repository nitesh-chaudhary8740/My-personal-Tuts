import { useState } from 'react'
import NewComp from './NewComp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My HTML page - {count}</h1>
      <button onClick={()=>{
        setCount(prev=>prev+1);
      }}>click here</button>
      <br />
      <NewComp name={'new component'}/>
    </>
  )
}

export default App

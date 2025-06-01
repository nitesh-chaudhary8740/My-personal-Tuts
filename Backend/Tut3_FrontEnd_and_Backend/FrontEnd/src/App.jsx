
import  { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'


function App() {
  const [jokes,setJokes] = useState([])
  const [clicks,setClicks] =useState(0)
  useEffect(()=>{
    axios.get('/api/jokes').
    then((response)=>{
        setJokes(response.data)
    })
  },[])
  return (
  <>
  <h1>FrontEnd + Backend clicks : {clicks} </h1>
  ,<button onClick={()=>{
    setClicks(clicks+1)
  }}>click</button>
  {jokes.length}
  {
    jokes.map((joke)=>{
        return <div key={joke.id}>
          <h3>
            {joke.title}
          </h3>
          <p>
            {joke.content}
          </p>
        </div>
    })
  }
  </>
  )
}

export default App

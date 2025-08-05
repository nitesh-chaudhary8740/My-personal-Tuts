
import axios from "axios"
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [jokes,setJokes] = useState(null)
  useEffect(()=>{
    axios.get("http://localhost:3000/api")
    .then((response)=>{
        setJokes(response.data)
        console.log(response.data)
    }).catch((e)=>{
      console.log(e)
    })
  },[])

  return (
    <>
    <h1>this is working</h1>
    {
   jokes && jokes.map((e,i)=>{
    return    <div key={i}> 
        <h3>this is title{e.title}</h3>
        <p>{e.joke}</p>
        </div>
      })
    
    }
    </>)
  
}

export default App

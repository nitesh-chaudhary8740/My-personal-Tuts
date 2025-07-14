// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
const arr = [1,3,43,54];

  return (
    <>
  {
    arr.map((e,i)=>{
      return <span key={i}>{e}</span>
    })
  }
    </>
  )
}

export default App

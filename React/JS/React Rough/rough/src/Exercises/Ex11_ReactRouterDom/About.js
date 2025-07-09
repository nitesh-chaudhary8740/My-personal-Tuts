import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate =useNavigate()
  return (
    <div>
      This is about page   
      <button onClick={()=>{
        navigate('/user/:id')
      }}>TO go Home</button>
    </div>
  )
}

export default About

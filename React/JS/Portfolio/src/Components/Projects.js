import React from 'react'
import Calculator from './Projects/Calculator'

export default function Projects() {
  return (
    <div className='HomeContainer'>
      <h1>This is Projects</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed beatae magni hic sapiente expedita maxime at eos temporibus dolorem! Assumenda corporis magnam cupiditate quaerat atque necessitatibus dicta! Praesentium, corrupti perferendis.</p>
      <div className='project container'>
        <div className='projects'>
          <div className='1Calc'>
            <h1> Calculator</h1>
            <p><h3>Desciption: </h3> This project is made by using HTML, CSS, and Javascript</p>
            <div className='project cont'><Calculator/></div>
          </div>
        </div>
      </div>
    </div>

  )
}

import React from 'react'
import Hello from './Hello'

const App = () => {
 const myObj = {
  hi:'helo',
  name:'Killua'
 }
  
  return (
    <div>
<Hello message={'Hi Gud AfterNOOn'} anotherProp='anotherOne' extra ={myObj} />
    </div>
  )
}

export default App

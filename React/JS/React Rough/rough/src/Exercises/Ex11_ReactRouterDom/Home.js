import React, { useContext } from 'react'
import { TheContext } from './ContextProvider'

const Home = () => {
const {state}=useContext(TheContext)
  return (
    <div>
      This is Homepage and count is- {state.count}

    </div>
  )
}

export default Home

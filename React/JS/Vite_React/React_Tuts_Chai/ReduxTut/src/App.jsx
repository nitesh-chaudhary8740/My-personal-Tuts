import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { Provider } from 'react-redux'
import { store } from './appStore/store'

function App() {
  const [count, setCount] = useState(0)

  return (

   
    <Provider store={store}>
      <h1>Redux TUt</h1>
      <AddTodo/>
      <Todos/>
      </Provider>
    
  )
}

export default App

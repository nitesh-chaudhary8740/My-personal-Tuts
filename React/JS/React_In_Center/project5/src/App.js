import { useSelector, useDispatch } from 'react-redux'
import {pasta,maggi} from './Redux/counterSlice'

function App() 
{

  const name = useSelector((state) => state.counter.name)
  const surname = useSelector((state) => state.counter.surname)
  const age = useSelector((state) => state.counter.age)
  const dispatch = useDispatch()
  return (
     <div>

      <div>
      <button
          aria-label="Decrement value"
          onClick={() => dispatch(maggi())}
        >
          1
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(pasta())}
        >
          2
        </button>
      </div>
      <div>Name is {name}</div>
      <div>Surname is {surname}</div>
      <div>Age is {age}</div>

     </div>
  );
}

export default App;
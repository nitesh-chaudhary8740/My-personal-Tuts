import React from 'react'
import {useDispatch} from 'react-redux';
import { addTodo } from '../Features/todo/todoSlice';

const AddTodo = () => {
    const [input,setInput] =React.useState('');
    const dispatch = useDispatch();
    const onAdd = () =>{
        if(input){
            dispatch(addTodo(input));
            setInput('');
        }
        return;
    }
  return (
    <div>
    <input type="text" value={input} placeholder='Enter Todo' onChange={(e)=>{setInput(e.target.value)}}/>
      <button onClick={onAdd}>Add Todo</button>
    </div>
  )
}

export default AddTodo

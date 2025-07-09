import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { removeTodo } from '../Features/todo/todoSlice';
const Todos = () => {
    const todos = useSelector(state=>state.todos);
    const dispatch = useDispatch();
  return (
    <div>
      {
        todos.map((todo)=>(<div key={todo.id}>
            <span>Id: {todo.id}</span>
            <span>Id: {todo.text}</span>
            <button onClick={()=>{dispatch(removeTodo(todo.id))}}>Delete</button>
        </div>))
      }
    </div>
  )
}

export default Todos

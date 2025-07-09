import React from 'react'
import { useReducer } from 'react';

// const initialStates = { count: 0 ,anotherState:true};//changes

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, count: state.count + 1 };
    case 'DECREMENT':
      return {...state, count: state.count - 1 };
    case 'TOGGLE': //changes
        return {...state,anotherState: !state.anotherState}
    case 'RESET':
            return {count: 0 ,anotherState:true};    
    default:
      return state;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, undefined, ()=>{
    return { count: 0 ,anotherState:true}
  });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      {state.anotherState ? 'True':'False'}
      <button onClick={() => dispatch({ type: 'TOGGLE' })}>TOGGLE</button>
      
      
     <div>
      </div>
    </div>
  );
}
const L4UseReducer = () => {
  return (
    <div>
     <Counter/> 
    </div>
  )
}

export default L4UseReducer

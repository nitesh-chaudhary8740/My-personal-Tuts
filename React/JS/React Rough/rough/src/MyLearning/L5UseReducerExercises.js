
import React, { useCallback, useReducer } from 'react'
const reducer = (state,action) =>{

    if(action.type === 'INPUTTASK'){
            return {...state, task:action.payload}
    }
   
    if(action.type === 'ADD_ITEM') {
        if(state.task.trim()){
            state.todoList.push({task:state.task});
            state.task = '';
        } 
        return {...state,todoList:state.todoList};
    }
    else {
        return state;
    }
}
const MyComponent = () =>{
const [state, dispatch] = useReducer(reducer,{todoList:[], task:''})
   
const myDispatch = useCallback ((action)=>{
    return dispatch(action);
},[dispatch]

);
const addItemInList = () =>{ 
   
        myDispatch({type:'ADD_ITEM'})
    
    // dispatch ( {type:'ADD'} )
}



return (
    <div>
        <div>Enter Task: 
        <input type='text' value={state.task} onChange={(event)=>{
            myDispatch({type:'INPUTTASK', payload:event.target.value})
        }}/>
        </div>
    
    <div>
        <button onClick={addItemInList}> Add Item </button>
    </div>
    {
        state.todoList.map((ele,index)=>{
           return (<div key={'item'+index}> {`My Task-${index}: ${ele.task}`}  </div>)
        })
    }
    </div>
)
}
const L5UseReducerExercises = () => {
  return (
    <div>
      <MyComponent/>
    </div>
  )
}

export default L5UseReducerExercises

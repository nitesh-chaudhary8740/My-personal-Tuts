import React, { useCallback, useReducer } from 'react'
const TheContext =React.createContext();
const reducerFunc =(state,action) =>{
    if(action.type === 'INC'){
        return {...state,count:state.count+1}
    }
    if(action.type === 'DEC'){
        return {...state,count:state.count-1}
    }
    if(action.type === 'RESET'){
        return {...state,count:0}
    }
    else{
        return state;
    }
}
const ContextProvider = ({children}) => {
const [state,dispatch] = useReducer(reducerFunc,{count:0})
const dispatcher = useCallback((action)=>{ return dispatch(action),[dispatch]}
)
  return (
    <TheContext.Provider value={{dispatcher,state}}>
        {children}
    </TheContext.Provider>
  )
}

export  {ContextProvider,TheContext}

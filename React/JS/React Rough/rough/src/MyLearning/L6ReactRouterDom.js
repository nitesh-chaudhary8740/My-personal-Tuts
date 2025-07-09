import React from 'react';
import { BrowserRouter, Route, Link, useHistory, Routes } from 'react-router-dom';
const Context =React.createContext();
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
const ContextProvider = () =>{

    return (
        <Context.Provider>

        </Context.Provider>
    )
}
const Home = () => {
    return (<div>
        This is Home
    </div>)
}
const About = () => {
    return (<div>
        This is About
    </div>)
}
const Contact = () => {
    return (<div>
        This is Contact
    </div>)
}
const Navigation = () => {
    return (
        <div>
            <ul>
                <li >
                    <Link to={'/'}> Home</Link>
                </li>
                <li>
                    <Link to={'/About'}> About</Link>
                </li>
                <li>
                    <Link to={'/Contact'}> Contact</Link>
                </li>
            </ul>
        </div>
    )
}
const L6ReactRouterDom = () => {
    return (
        <div>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path='/' exact Component={Home} />
                    <Route path='/About' exact Component={About} />
                    <Route path='/Contact' exact Component={Contact} />
                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default L6ReactRouterDom

import React, { useState } from 'react'

export const userContext = React.createContext();
const UserContextComponent = ({children}) => {
    const [user,setUser] = useState('null')
    const [isLogin,setIsLogin] = useState(false);
    const[userName,setUserName]= useState('');
    const[userPassword,setUserPassword]= useState('');
    const props = {user,setUser,isLogin,setIsLogin,userName,setUserName,userPassword,setUserPassword}
  return (
    
      <userContext.Provider value={props}> 
        {children}
      </userContext.Provider>
  
  )
}

export default UserContextComponent;

import React, { useContext, useState } from 'react'
import useUser from './useUser';
import { userContext } from './UserContextComponent';

const LoginForm = () => {
    
    const{user,setUser,isLogin,setIsLogin} =useUser();
    const{userName,setUserName,userPassword,setUserPassword} = useContext(userContext)
  return (
    <div>
      <label>User Name: <input type="text" value={userName} onChange={(event)=>{setUserName(event.target.value)}}/></label>
      <label>User Password: <input type="text" value={userPassword}  onChange={(event)=>{setUserPassword(event.target.value)}} /></label>
      <button disabled={!userName || !userPassword} onClick={()=>{
        setUser({userName:userName,userPassword:userPassword})
        setIsLogin(true);
    }}>Login</button>
      <button disabled={!isLogin}onClick={()=>{
        setUser(null);
        setIsLogin(false)
      }}>Logout</button>
     {isLogin && (<div className='display'>
        <span> <b>UserName: </b> {user.userName}</span>
        <span> <b>Status: </b> SuccessFully Logged in</span>

      </div>)}
    </div>
  )
}

export default LoginForm

import React, { useContext } from 'react'
import { userContext } from './UserContextComponent'

const useUser = () => {
    const {user,setUser,isLogin,setIsLogin} = useContext(userContext)
  return (
    {user,setUser,isLogin,setIsLogin}
  )
}

export default useUser

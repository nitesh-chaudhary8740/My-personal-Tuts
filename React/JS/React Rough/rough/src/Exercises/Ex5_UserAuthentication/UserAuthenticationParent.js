import React from 'react'
import UserContextComponent from './UserContextComponent'
// import {useUser} from './useUser'
import LoginForm from './LoginForm'

const UserAuthenticationParent = () => {
    
  return (
    <UserContextComponent>
        {/* <useUser/> */}
        <LoginForm/>
    </UserContextComponent>
  )
}

export default UserAuthenticationParent

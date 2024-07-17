import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext);
  if(user) return <h1>Hello {user}</h1>
  return <h1>Please Enter Your Name...</h1>
}

export default Profile


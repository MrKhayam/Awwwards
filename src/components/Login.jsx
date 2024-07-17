import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext';
import Profile from './Profile';

const Login = () => {
    const {setUser} = useContext(UserContext);
    const [username, setUsername] = useState('');

    const handleClick = () => {
        setUser(username);
        setUsername('');
    }
    
  return (
    <>
      <div className="w-full h-screen flex items-center flex-col justify-center">
        <input
        className='px-2 py-1 text-black placeholder-black rounded-md bg-gray-300 ' 
        placeholder='UserName...'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        type="text"  />
        <button
        onClick={handleClick}
        className='my-10 bg-white px-5 py-2 rounded-lg text-black '>Submit</button>
        <Profile />
      </div>
    </>
  )
}

export default Login

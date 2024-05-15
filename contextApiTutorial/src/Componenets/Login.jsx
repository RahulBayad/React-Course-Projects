import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'
// import { userContext } from '../App'

const Login = () => {

    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")

    const {user , setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        setUser({username , password})
        console.log("user",user);
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <input 
            type="text" 
            placeholder='Username' 
            value={username} 
            onChange={(e)=> setUsername(e.target.value)}
        />
        <input 
            type="text" 
            placeholder='Password' 
            value={password} 
            onChange={(e)=> setPassword(e.target.value)}
        />
        
        <button type="submit">Login</button>

      </form>
    </div>
  )
}

export default Login

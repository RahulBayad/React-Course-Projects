import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'
// import { userContext } from '../App'

const Profile = () => {

    const {user} = useContext(UserContext)
    console.log("user in profile",user)

    return (    
        <>
        {
            user ? 
            <h1>Welcome, {user.username}</h1>
            : 
            <h1>Please Login</h1>
        }
        </>    
    )
}

export default Profile

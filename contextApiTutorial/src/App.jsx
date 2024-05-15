import React, { createContext , useState} from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Componenets/Login'
import Profile from './Componenets/Profile'

// const userContext = createContext();

function App() {

  const [user , setUser] = useState("");

  return (
  <UserContextProvider>

    {/* <userContext.Provider value={{user , setUser}}> */}
      <Login/>
      <Profile/>
    {/* </userContext.Provider> */}
  
  </UserContextProvider>
  )
}

export default App
// export {userContext};

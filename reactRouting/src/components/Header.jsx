import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <NavLink to='' style={({isActive})=>(isActive ? {color:"red",background:"yellow"} : null )}>
      Home</NavLink>
      <NavLink to='about'>About</NavLink>
      
    </div>
  )
}

export default Header

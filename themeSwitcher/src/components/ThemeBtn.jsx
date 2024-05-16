import React from 'react'
import useTheme from '../contexts/themeContext'

const ThemeBtn = () => {
  
  const {theme , darkTheme , lightTheme} = useTheme();

  const changeTheme = (e)=>{
    let themeCheck = e.target.checked

    if(themeCheck){
      darkTheme()
    }else{ 
      lightTheme()
    }

    console.log(themeCheck)
  }

  return (
    // <div className=''>
    <div className='dark:bg-black dark:text-white'>
        <input 
            type="checkbox"  
            onChange={(e)=>changeTheme(e)}
        /> Dark Mode
    </div>
  )
}

export default ThemeBtn

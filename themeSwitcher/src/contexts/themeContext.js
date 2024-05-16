import React from "react";
import { createContext , useContext} from "react";

export const themeContext = createContext({
    theme : "light",
    darkTheme : ()=>{},
    lightTheme : ()=>{},
})

export const ThemeProvider = themeContext.Provider

const useTheme = ()=>{
    return useContext(themeContext)
} 
export default useTheme;
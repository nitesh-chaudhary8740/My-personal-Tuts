import React, { useState } from 'react'
export const ThemeProvider =React.createContext() //exporting and creating provider
const ThemeContextProvider = ({children}) => { //provider component
    const [theme,setTheme]= useState('dark');
    const [btnText,setBtnText]= useState('Dark Mode');
  return (
    <ThemeProvider.Provider value={{theme,setTheme,btnText,setBtnText}}> 
        {children}
    </ThemeProvider.Provider>
  )
}

export default ThemeContextProvider;

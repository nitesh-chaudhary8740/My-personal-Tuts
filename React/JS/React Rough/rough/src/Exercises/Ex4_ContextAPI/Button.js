import React, { useContext, useLayoutEffect } from 'react'
import { ThemeProvider } from './ThemeContextProvider';
const Button = () => {
    const { theme,setTheme, btnText, setBtnText} = useContext(ThemeProvider);
    // const themeValue = useContext(ThemeProvider);
    const modeBtn = document.getElementById('mode');
    const btnHandler = () =>{
        theme==='dark'?setTheme('bright'):setTheme('dark');
    
    }
    
useLayoutEffect(() => {
    const modeBtn = document.getElementById('mode');
    if (modeBtn) {
      if (theme === 'dark') {
        setBtnText('Dark Mode');
        modeBtn.style.backgroundColor = 'black';
        modeBtn.style.color = 'white';
      } else {
        setBtnText('Bright Mode');
        modeBtn.style.backgroundColor = 'white';
        modeBtn.style.color = 'black';
      }
    }
  }, [theme]);
  return (
    <div>
      <button id='mode' onClick={btnHandler}>{btnText}</button>
    </div>
  )
}

export default Button

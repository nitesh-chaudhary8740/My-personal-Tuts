import React from 'react'
import ThemeContextProvider from './ThemeContextProvider'
import Button from './Button'

const ThemeToggel = () => {
  return (
<ThemeContextProvider>
    <Button/>
</ThemeContextProvider>
  )
}

export default ThemeToggel

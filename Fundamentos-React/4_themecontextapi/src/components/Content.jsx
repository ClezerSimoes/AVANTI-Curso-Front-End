import React from 'react'
import { useTheme } from './ThemeContext'

const Content = () => {
    const {theme} = useTheme()

  return (
    <main>
        <p>The Current theme is {theme}</p>
    </main>
  )
}

export default Content
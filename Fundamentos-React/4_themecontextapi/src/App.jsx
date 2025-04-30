import React from 'react'
import Header from './components/Header'
import ThemeContext, { useTheme } from './components/ThemeContext'
import Content from './components/Content'

import './App.css'


function ThemedApp() {
  const { theme } = useTheme()

  return (
    <>
      <div className={`app ${theme}`}>
        <Header></Header>
        <Content></Content>
      </div>

    </>
  )
}

function App() {
  return (
    <ThemeContext>
      <ThemedApp></ThemedApp>
    </ThemeContext>
  )
}

export default App

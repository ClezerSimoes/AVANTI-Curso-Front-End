import React from 'react'

import './App.css'
import TextComponent from './components/TextComponent'
import {Events} from './components/Events'
import MyCSSComponent from './components/MyCSSComponent/MyCSSComponent'

function App() {

  return (
    <>
      <h2>Componente CSS</h2>
      <MyCSSComponent></MyCSSComponent>
      <TextComponent text="Primeiro Texto" description="Descrição 1" />
      <TextComponent text="Segundo Texto" description="Descrição 1" />
      <h2>Eventos</h2>
      <Events></Events>
    </>
  )
}

export default App

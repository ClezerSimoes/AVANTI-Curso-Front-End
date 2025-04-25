import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TodoList></TodoList>
    </>
  )
}

export default App

import React, {useState, useEffect} from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        document.title = `Contador: ${counter}`
    }, [counter])

    const increment = () => {
        setCounter((prevState) => prevState + 1)
    }

    const decrement = () => {
        setCounter((prevState) => prevState - 1)
    }

  return (
    <>
        {counter}
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </>
  )
}

export default Counter
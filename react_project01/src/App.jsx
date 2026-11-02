import { useState } from "react"


function App() {

  let [counter, setCounter] = useState(0)

  const addValue = () => {
    setCounter(counter + 1)
  }

  const reduceValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue}>Add Value</button>

    <br /> <br />
    
    <button onClick={reduceValue}>Reduce Value</button>
    </>
  )
}

export default App

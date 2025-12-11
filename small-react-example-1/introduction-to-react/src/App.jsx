import { useState } from 'react'

import Description from './Description'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // keeping thing in sync with state.
  const [message, setMessage] = useState("something")

  console.log(message)

  return (
    <>
      <h1>Introduction to React</h1>
      <p>The hot reload is functional</p>
      <input type="text"
        value={message}
        onChange={(event) => {setMessage(event.target.value)}}
      />
      <Description text={message} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

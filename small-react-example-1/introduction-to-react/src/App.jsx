import { useState } from 'react'

import Description from './Description'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Introduction to React</h1>
      <p>The hot reload is functional</p>
      <Description text={"Our first example of a component"} />
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

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h2 data-testid='cypress-title'>Hello world</h2>
      <input data-cy="submit" type="submit"/>
    </div>
    </>
  )
}

export default App

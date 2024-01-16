import { useState } from 'react'
import './App.css'

function App() {
  const [clicks, setClicks] = useState(0)

  return (
    <>
      
        <button onClick={() => setClicks((clicks) => clicks + 1)}>
          {clicks} clicks
        </button>
        
    </>
  )
}

export default App

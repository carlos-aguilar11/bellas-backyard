import { useState } from 'react'

import './App.css'
import Home from '../Home/Home'

function App() {
  const [response, setResponse] = useState('')

  const fetchData = async () => {
    try {
      const response = await fetch('/api/v1/categories/1')
      const data = await response.json()
      setResponse(JSON.stringify(data, null, 2))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <pre>{response}</pre>
    </div>
  )
}

export default App

/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Hero from './components/ui/custom/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Hero */}
      <Hero/>
    </>
  )
}

export default App

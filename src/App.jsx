/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Hero from './components/ui/custom/Hero'
import BgVideo from './components/BgVideo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Hero */}
      {/* <Hero/> */}
      <BgVideo/>
    </>
  )
}

export default App

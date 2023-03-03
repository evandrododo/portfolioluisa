import { useState } from 'react'
import './App.css'
import Section from './Section'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="Portfolio">
      <div className="topbar">
        <img src="/luisalogo.svg" className="logo" alt="Luisa Kuhn" />
      </div>
      <Section color="#EBEBFF" title="Luisa Kuhn" />
      <Section color="#FDEDFD" title="projects" />
      <Section color="#FFFFEB" title="about" link="#about" />
    </div>
  )
}

export default App

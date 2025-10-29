import { useState } from 'react'
import './App.css'
import TemplatesPreviewSection from "./components/TemplatesPreviewSection.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <TemplatesPreviewSection/>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FileUpload from './components/fileUpload'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <span>Sample</span>
      <FileUpload/>

    </>
  )
}

export default App

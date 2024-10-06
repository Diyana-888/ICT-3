import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Add from './components/Add'
import View from './components/View'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <h1>Welcome to Employee App</h1>
      <Routes>
        <Route path='add' element={<Add />} />
        <Route path='view' element={<View />} />
     </Routes> 
    </>
  )
}

export default App

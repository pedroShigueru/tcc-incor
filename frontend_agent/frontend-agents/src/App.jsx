import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Portal Médico IA</h1>
      </header>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/patient/:patientId' element={<PatientSearch/>}/>
      </Routes>
    </div>
  )
}

export default App

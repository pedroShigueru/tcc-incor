import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import PatientSearch from './pages/PatientSearch';
import HomePage from './pages/HomePage';

import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/patient' element={<PatientSearch/>}/>
    </Routes>
  )
}

export default App

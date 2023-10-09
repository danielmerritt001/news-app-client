// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Landing from './pages/Landing/Landing'

// components
import NavBar from './components/NavBar/NavBar'

// services
import * as newsService from './services/newsService'


// styles
import './App.css'

function App() {
  

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  )
}

export default App

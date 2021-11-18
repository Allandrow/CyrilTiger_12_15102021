import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './page/home/home'
import Profil from './page/profil/profil'

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="about/:id" element={<Profil />} />
    </Routes>
  )
}

export default App

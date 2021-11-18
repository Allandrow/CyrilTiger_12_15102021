import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './page/home/home'
import Profil from './page/profil/profil'

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="user/">
        <Route path=":userId" element={<Profil />} />
      </Route>
    </Routes>
  )
}

export default App

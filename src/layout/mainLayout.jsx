import React from 'react'
import Header from '../components/header/header'

const MainLayout = ({ children }) => {
  return (
    <div className="font-display">
      <Header />
      {children}
    </div>
  )
}

export default MainLayout

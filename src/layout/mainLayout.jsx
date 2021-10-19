import React from 'react'
import Header from '../components/header/header'
import PropTypes from 'prop-types'

const MainLayout = ({ children }) => {
  return (
    <div className="font-display flex flex-col h-screen">
      <Header />
      {children}
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.element
}

export default MainLayout

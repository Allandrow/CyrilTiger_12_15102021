import React from 'react'
import Header from '../components/header/header'
import PropTypes from 'prop-types'

const MainLayout = ({ children }) => {
  return (
    <div className="font-display">
      <Header />
      {children}
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default MainLayout

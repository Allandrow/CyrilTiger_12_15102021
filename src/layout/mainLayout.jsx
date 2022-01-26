import React from 'react'
import Header from '../components/header/header'
import PropTypes from 'prop-types'

/**
 * Layout Template Wrapping Components
 * @param {ReactElement} children React components
 * @returns {ReactElement} React Component
 */
const MainLayout = ({ children }) => {
  return (
    <div className="font-display flex flex-col">
      <Header />
      {children}
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.element
}

export default MainLayout

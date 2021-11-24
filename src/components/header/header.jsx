import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../navigation/navigation'
import logo from './logo.svg'

/**
 * React Component displaying the header of the app
 * @returns {ReactElement} React Component
 */
const Header = () => {
  return (
    <header className="bg-dark flex justify-between gap-36 items-center p-5 shadow-lg">
      <h1>
        <Link to="/">
          <img src={logo} alt="SportSee" />
        </Link>
      </h1>
      <Navigation />
    </header>
  )
}

export default Header

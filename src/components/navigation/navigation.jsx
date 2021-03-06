import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Header Navigation Component
 * @returns {ReactElement} React Component
 */
const Navigation = () => {
  return (
    <nav className="text-white text-2xl font-medium flex-1 max-w-7xl">
      <ul className="flex justify-between">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <a href="">Profil</a>
        </li>
        <li>
          <a href="">Réglage</a>
        </li>
        <li>
          <a href="">Communauté</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation

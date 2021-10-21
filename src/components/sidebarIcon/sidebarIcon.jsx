import React from 'react'
import PropTypes from 'prop-types'

/**
 * @param {string} url icon href attribute
 * @param {string} altText alt attribute text
 */
const SidebarIcon = ({ url, altText }) => {
  return (
    <li className="bg-white rounded-md h-16 w-16 flex justify-center items-center">
      <img src={url} alt={altText} />
    </li>
  )
}

SidebarIcon.propTypes = {
  url: PropTypes.string.isRequired,
  altText: PropTypes.string
}

export default SidebarIcon

import React from 'react'
import PropTypes from 'prop-types'

/** TODO
 * @param {string} url icon href attribute
 * @param {string} altText alt attribute text
 */
const SidebarIcon = ({ url, altText }) => {
  return (
    <li className="h-16 w-16 bg-white rounded-md flex justify-center items-center">
      <img src={url} alt={altText} className="" />
    </li>
  )
}

SidebarIcon.propTypes = {
  url: PropTypes.string.isRequired,
  altText: PropTypes.string
}

export default SidebarIcon

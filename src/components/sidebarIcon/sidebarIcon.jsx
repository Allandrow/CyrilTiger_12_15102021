import React from 'react'
import PropTypes from 'prop-types'

const SidebarIcon = ({ icon, altText }) => {
  return (
    <li className='bg-white rounded-md h-16 w-16 flex justify-center items-center'>
      <img src={icon} alt={altText} />
    </li>
  )
}

SidebarIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  altText: PropTypes.string
}

export default SidebarIcon

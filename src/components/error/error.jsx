import React from 'react'
import PropTypes from 'prop-types'

/**
 * Error component
 * @param {string} error error message
 */
const Error = ({ error }) => {
  return <div className="flex-1">{error}</div>
}

Error.propTypes = {
  error: PropTypes.string
}
export default Error

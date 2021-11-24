import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

const UserIdContext = React.createContext()

/**
 * Wrapper providing a Context for an ID found in the URL
 * @param {ReactElement} children Children components
 * @returns {ReactElement} React Component
 */
const UserIdProvider = ({ children }) => {
  const { userId } = useParams()
  return (
    <UserIdContext.Provider value={userId}>{children}</UserIdContext.Provider>
  )
}

export const useUserId = () => useContext(UserIdContext)

UserIdProvider.propTypes = {
  children: PropTypes.element
}

export default UserIdProvider

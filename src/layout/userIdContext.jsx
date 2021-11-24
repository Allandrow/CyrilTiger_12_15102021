import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

const UserIdContext = React.createContext()

/**
 * TODO
 * @param {*} param0
 * @returns
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

// TODO : Naming

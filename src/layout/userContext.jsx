import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

const UserContext = React.createContext()

const UserProvider = ({ children }) => {
  const { userId } = useParams()
  return <UserContext.Provider value={userId}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext)

UserProvider.propTypes = {
  children: PropTypes.element
}

export default UserProvider

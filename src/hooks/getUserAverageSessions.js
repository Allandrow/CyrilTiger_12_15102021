import { httpRequest } from './httpRequest'
import { config } from '../../constants'

/**
 * Hook to fetch user daily sessions
 * @param {string} id user id
 * @returns {object} loading, error, data
 */
export const getUserAverageSessions = (id) => {
  return httpRequest(config.url.API_USER_SESSIONS(id))
}

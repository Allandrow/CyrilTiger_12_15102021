import { httpRequest } from './httpRequest'
import { config } from '../../constants'

/**
 * Hook to fetch user daily sessions
 * @returns {object} loading, error, data
 */
export const getUserAverageSessions = () => {
  return httpRequest(config.url.API_USER_SESSIONS())
}

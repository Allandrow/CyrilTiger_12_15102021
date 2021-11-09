import { httpRequest } from './httpRequest'
import { config } from '../../constants'

/**
 * Hook to fetch user activity
 * @returns {object} loading, error, data
 */
export const getUserActivity = () => {
  return httpRequest(config.url.API_URL_ACTIVITY)
}

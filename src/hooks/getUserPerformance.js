import { httpRequest } from './httpRequest'
import { config } from '../../constants'

/**
 * Hook to fetch user performance
 * @returns {object} loading, error, data
 */
export const getUserPerformance = () => {
  return httpRequest(config.url.API_USER_PERFORMANCE())
}

import { httpRequest } from './httpRequest'
import { config } from '../../constants'

/**
 * Hook to fetch user performance
 * @param {string} id user id
 * @returns {object} loading, error, data
 */
export const getUserPerformance = (id) => {
  return httpRequest(config.url.API_USER_PERFORMANCE(id))
}

import { httpRequest } from './httpRequest'
import { config } from '../../constants'

/**
 * Hook to fetch user activity TODO
 * @param {string} id user id
 * @returns {object} loading, error, data
 */
export const getUserActivity = (id) => {
  return httpRequest(config.url.API_USER_ACTIVITY(id))
}

import { httpRequest } from './httpRequest'
import { config } from '../../constants'

/**
 * Hook to fetch user informations TODO
 * @param {string} id user id
 * @returns {object} loading, error, data
 */
export const getUserInfos = (id) => {
  return httpRequest(config.url.API_USER_INFOS(id))
}

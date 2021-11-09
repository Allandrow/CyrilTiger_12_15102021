import { httpRequest } from './httpRequest'
import { config } from '../../constants'

/**
 * Hook to fetch user informations
 * @returns {object} loading, error, data
 */
export const getUserInfos = () => {
  return httpRequest(config.url.API_URL_INFOS)
}

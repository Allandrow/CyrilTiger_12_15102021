import { httpRequest } from './httpRequest'

/**
 * Hook to fetch user informations
 * @returns {object} loading, error, data
 */
export const getUserInfos = () => {
  const userInfosURL = '../src/data/userInfos.json'
  return httpRequest(userInfosURL)
}

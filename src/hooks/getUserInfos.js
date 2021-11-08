import { httpRequest } from './httpRequest'

/**
 * Hook to fetch user informations
 * @returns {object} loading, error, data
 */
export const getUserInfos = () => {
  const url = '../src/data/userInfos.json'
  return httpRequest(url)
}
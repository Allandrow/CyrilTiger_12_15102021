import { httpRequest } from './httpRequest'

/**
 * Hook to fetch user performance
 * @returns {object} loading, error, data
 */
export const getUserPerformance = () => {
  const url = '../src/data/userPerformance.json'
  return httpRequest(url)
}

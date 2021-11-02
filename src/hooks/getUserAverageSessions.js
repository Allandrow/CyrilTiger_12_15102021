import { httpRequest } from './httpRequest'

/**
 * Hook to fetch user daily sessions
 * @returns {object} loading, error, data
 */
export const getUserAverageSessions = () => {
  const url = '../src/data/userAverageSession.json'
  return httpRequest(url)
}

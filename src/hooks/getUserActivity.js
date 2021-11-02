import { httpRequest } from './httpRequest'

/**
 * Hook to fetch user activity
 * @returns {object} loading, error, data
 */
export const getUserActivity = () => {
  const url = '../src/data/userActivity.json'
  return httpRequest(url)
}

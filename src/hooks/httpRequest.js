import axios from 'axios'
import { useState, useEffect } from 'react'

/**
 * Custom hook function to fetch data with Axios + handling of state data
 * @param {string} url url to fetch from
 * @returns {object} loading, error, data
 */
export const httpRequest = (url) => {
  const [data, setData] = useState(undefined)
  const [error, setError] = useState(undefined)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data.data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err ?? 'Error')
        setLoading(false)
      })
  }, [url])

  return { loading, error, data }
}

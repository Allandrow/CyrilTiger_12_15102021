import axios from 'axios'
import { useState, useEffect } from 'react'

/**
 * Asynchronous function to fetch data with Axios + handling of state data
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
        setLoading(false)
        setData(res.data)
      })
      .catch((err) => {
        setLoading(false)
        setError(err ?? 'Error')
      })
  }, [url])

  return { loading, error, data }
}

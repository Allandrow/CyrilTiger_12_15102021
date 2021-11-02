import React from 'react'
import { getUserAverageSessions } from '../../hooks/getUserAverageSessions'

const AverageChart = () => {
  const { loading, error, data } = getUserAverageSessions()

  if (data) {
    // const { sessions } = data
  }

  if (loading) {
    return <div className="flex-1">Loading</div>
  }

  if (error) {
    ;<div className="flex-1">{error}</div>
  }

  return (
    <div className="flex-1">
      <h2>Average Chart</h2>
    </div>
  )
}

export default AverageChart

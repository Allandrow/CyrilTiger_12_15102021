import React from 'react'
import { getUserPerformance } from '../../hooks/getUserPerformance'

const Performance = () => {
  const { loading, error, data } = getUserPerformance()

  if (data) {
    // console.log(data)
  }

  if (loading) {
    return <div className="flex-1">Loading</div>
  }

  if (error) {
    return <div className="flex-1">{error}</div>
  }

  return (
    <div className="flex-1">
      <h2>Performance</h2>
    </div>
  )
}

export default Performance

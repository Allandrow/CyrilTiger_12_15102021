import React from 'react'
import { getUserPerformance } from '../../hooks/getUserPerformance'
import UserRadarChart from '../userRadarChart/userRadarChart'

const Performance = () => {
  const { loading, error, data } = getUserPerformance()

  if (loading) {
    return (
      <div className="flex-1 rounded bg-secondary p-4 fill-current text-white">
        Loading
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex-1 rounded bg-secondary p-4 fill-current text-white">
        {error}
      </div>
    )
  }

  return (
    <div className="flex-1 rounded bg-secondary p-4 fill-current text-white">
      <UserRadarChart kind={data.kind} data={data.data} />
    </div>
  )
}

export default Performance

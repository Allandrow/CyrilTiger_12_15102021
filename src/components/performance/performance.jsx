import React from 'react'
import { getUserPerformance } from '../../hooks/getUserPerformance'
import UserRadarChart from '../userRadarChart/userRadarChart'

const Performance = () => {
  const { loading, error, data } = getUserPerformance()

  if (loading) {
    return (
      <div className="rounded-md bg-secondary p-4 fill-current text-white h-72 col-span-1">
        Loading
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-md bg-secondary p-4 fill-current text-white h-72 col-span-1">
        {error}
      </div>
    )
  }

  return (
    <div className="rounded-md bg-secondary p-4 fill-current text-white h-72 col-span-1">
      <UserRadarChart kind={data.kind} data={data.data} />
    </div>
  )
}

export default Performance

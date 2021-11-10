import React from 'react'
import { getUserPerformance } from '../../hooks/getUserPerformance'
import Loader from '../loader/loader'
import Error from '../error/error'
import UserRadarChart from '../userRadarChart/userRadarChart'

const Performance = () => {
  const { loading, error, data } = getUserPerformance()

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <Error />
  }

  return (
    <div className="flex-1 rounded bg-secondary p-4 fill-current text-white">
      <UserRadarChart kind={data.kind} data={data.data} />
    </div>
  )
}

export default Performance

import React from 'react'
import { getUserActivity } from '../../hooks/getUserActivity'
import Loader from '../loader/loader'
import Error from '../error/error'
import UserBarChart from '../userBarChart/userBarChart'

const Histogram = () => {
  const { loading, error, data } = getUserActivity()

  if (loading) {
    return <Loader />
  }

  if (error) {
    // TODO : import className props to customize component
    // return <div className="bg-gray-50 rounded-md p-4">{error}</div>
    return <Error />
  }

  return (
    <div className="bg-gray-50 rounded-md p-8 h-80">
      <div className="flex justify-between">
        <h3 className="font-medium">Activité quotidienne</h3>
        <div className="flex gap-4 font-medium text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="block w-2 h-2 bg-secondary rounded"></span>
            <span>Poids (kg)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="block w-2 h-2 rounded bg-red-500"></span>
            <span>Calories brûlées (kCal)</span>
          </div>
        </div>
      </div>
      <UserBarChart activity={data.sessions} />
    </div>
  )
}

export default Histogram

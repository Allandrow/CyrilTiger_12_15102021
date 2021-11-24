import React from 'react'
import { getUserActivity } from '../../hooks/getUserActivity'
import { useUserId } from '../../layout/userIdContext'
import UserBarChart from '../userBarChart/userBarChart'

/**
 * TODO
 * @returns
 */
const Histogram = () => {
  const userId = useUserId()
  const { loading, error, data } = getUserActivity(userId)

  if (loading) {
    return <div className="bg-gray-50 rounded-md p-8 h-80">Loading</div>
  }

  if (error) {
    return <div className="bg-gray-50 rounded-md p-8 h-80">{error}</div>
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
            <span className="block w-2 h-2 rounded bg-barRed"></span>
            <span>Calories brûlées (kCal)</span>
          </div>
        </div>
      </div>
      <UserBarChart data={data.sessions} />
    </div>
  )
}

export default Histogram

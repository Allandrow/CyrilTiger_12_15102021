import React from 'react'
import { getUserInfos } from '../../hooks/getUserInfos'
import UserRadialChart from '../userRadialChart/userRadialChart'
import { useUser } from '../../layout/userContext'

const DailyScore = () => {
  const userId = useUser()
  const { loading, error, data } = getUserInfos(userId)

  if (loading) {
    return (
      <div className="bg-gray-50 rounded-md pt-8 h-72 col-span-1">Loading</div>
    )
  }

  if (error) {
    return (
      <div className="bg-gray-50 rounded-md pt-8 h-72 col-span-1">{error}</div>
    )
  }

  return (
    <div className="bg-gray-50 rounded-md pt-8 h-72 col-span-1 relative">
      <h3 className="text-base font-medium ml-8 absolute">Score</h3>
      <UserRadialChart score={data.todayScore} />
    </div>
  )
}

export default DailyScore

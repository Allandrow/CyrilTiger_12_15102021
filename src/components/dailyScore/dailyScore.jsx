import React from 'react'
import { getUserInfos } from '../../hooks/getUserInfos'
import UserRadialChart from '../userRadialChart/userRadialChart'

const DailyScore = () => {
  const { loading, error, data } = getUserInfos()

  if (loading) {
    return (
      <div className="bg-gray-50 rounded-md pt-8 pl-8 pr-8 flex flex-col flex-1">
        Loading
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-gray-50 rounded-md pt-8 pl-8 pr-8 flex flex-col flex-1">
        {error}
      </div>
    )
  }

  return (
    <div className="bg-gray-50 rounded-md pt-8 flex flex-col flex-1">
      <h3 className="text-base font-medium ml-8">Score</h3>
      <UserRadialChart score={data.todayScore} />
    </div>
  )
}

export default DailyScore

import React from 'react'
import { useParams } from 'react-router-dom'
import { getUserInfos } from '../../hooks/getUserInfos'
import UserRadialChart from '../userRadialChart/userRadialChart'

/**
 * Wrapper component fetching user infos and injecting it in Radial Charts component
 * @returns {ReactElement} React Component
 */
const DailyScore = () => {
  const { userId } = useParams()
  const { loading, error, data } = getUserInfos(userId)

  if (loading) {
    return (
      <div className="bg-gray-50 rounded-md pt-8 h-72 col-span-1">Loading</div>
    )
  }

  if (error) {
    return (
      <div className="bg-gray-50 rounded-md pt-8 h-72 col-span-1">
        Something went wrong while getting your daily objective result !
      </div>
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

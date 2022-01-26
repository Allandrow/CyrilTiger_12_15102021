import React from 'react'
import { useParams } from 'react-router-dom'
import { getUserPerformance } from '../../hooks/getUserPerformance'
import UserRadarChart from '../userRadarChart/userRadarChart'

/**
 * Wrapper component fetching user performance infos and injecting it in Radar Charts component
 * @returns {ReactElement} React Component
 */
const Performance = () => {
  const { userId } = useParams()
  const { loading, error, data } = getUserPerformance(userId)

  if (loading) {
    return (
      <div className="rounded-md bg-secondary fill-current text-white h-72 col-span-1">
        Loading
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-md bg-secondary fill-current text-white h-72 col-span-1">
        Something went wrong while getting your performance pointers !
      </div>
    )
  }

  return (
    <div className="rounded-md bg-secondary fill-current text-white h-72 col-span-1">
      <UserRadarChart kind={data.kind} data={data.data} />
    </div>
  )
}

export default Performance

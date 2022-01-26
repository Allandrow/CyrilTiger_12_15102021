import React from 'react'
import { useParams } from 'react-router-dom'
import { getUserAverageSessions } from '../../hooks/getUserAverageSessions'
import UserLineChart from '../userLineChart/userLineChart'

/**
 * Wrapper component fetching user average sessions infos and injecting it in Line Charts component
 * @returns { ReactElement } React Component
 */
const AverageSession = () => {
  const { userId } = useParams()
  const { loading, error, data } = getUserAverageSessions(userId)

  if (loading) {
    return (
      <div className="bg-primary rounded-md grid pt-4 pb-4 col-span-1 h-72">
        Loading
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-primary rounded-md grid pt-4 pb-4 col-span-1 h-72">
        Something went wrong while getting your performances !
      </div>
    )
  }

  return (
    <div className="bg-primary rounded-md grid pt-4 pb-4 col-span-1 h-72">
      <h3 className="text-white opacity-80 mt-4 ml-8 text-base font-medium">
        Durée moyenne des <br className="hidden xxl:inline" /> sessions
      </h3>
      <div className="flex-1">
        <UserLineChart data={data.sessions} />
      </div>
    </div>
  )
}

export default AverageSession

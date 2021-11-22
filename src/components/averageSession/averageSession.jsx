import React from 'react'
import { getUserAverageSessions } from '../../hooks/getUserAverageSessions'
import { useUserId } from '../../layout/userIdContext'
import UserLineChart from '../userLineChart/userLineChart'

const AverageSession = () => {
  const userId = useUserId()
  const { loading, error, data } = getUserAverageSessions(userId)

  if (loading) {
    return <div className="flex-1 bg-primary rounded-md h-72">Loading</div>
  }

  if (error) {
    return <div className="flex-1 bg-primary rounded-md h-72">{error}</div>
  }

  return (
    <div className="flex-1 bg-primary rounded-md flex flex-col pt-4 pb-4 col-span-2 h-72 xxl:col-span-1">
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

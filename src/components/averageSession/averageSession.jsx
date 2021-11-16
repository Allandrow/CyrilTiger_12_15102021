import React from 'react'
import { getUserAverageSessions } from '../../hooks/getUserAverageSessions'
import UserLineChart from '../userLineChart/userLineChart'

const AverageSession = () => {
  const { loading, error, data } = getUserAverageSessions()

  if (loading) {
    return <div className="flex-1 bg-primary rounded-md">Loading</div>
  }

  if (error) {
    return <div className="flex-1 bg-primary rounded-md">{error}</div>
  }

  return (
    <div className="flex-1 bg-primary rounded-md">
      <h3 className="text-white opacity-80 mt-8 ml-8 text-base font-medium">
        Durée moyenne des <br /> sessions
      </h3>
      <UserLineChart data={data.sessions} />
    </div>
  )
}

export default AverageSession

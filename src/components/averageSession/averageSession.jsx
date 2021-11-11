import React from 'react'
import { getUserAverageSessions } from '../../hooks/getUserAverageSessions'
import UserLineChart from '../userLineChart/userLineChart'
import Loader from '../loader/loader'
import Error from '../error/error'

const AverageSession = () => {
  const { loading, error, data } = getUserAverageSessions()

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <Error />
  }

  return (
    <div className="flex-1 bg-primary rounded-md">
      <h3 className="text-white opacity-70 mt-8 ml-8 text-base font-medium">
        Durée moyenne des <br /> sessions
      </h3>
      <UserLineChart data={data.sessions} />
    </div>
  )
}

export default AverageSession

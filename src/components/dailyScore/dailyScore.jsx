import React from 'react'
import { getUserInfos } from '../../hooks/getUserInfos'
import Loader from '../loader/loader'
import Error from '../error/error'
import UserRadialChart from '../userRadialChart/userRadialChart'

const DailyScore = () => {
  const { loading, error, data } = getUserInfos()

  if (loading) {
    return <Loader />
  }

  if (error) {
    return (
      // <div className="bg-gray-50 rounded-md pt-8 pl-8 pr-8 flex flex-col">
      //   {error}
      // </div>
      <Error />
    )
  }

  return (
    <div className="bg-gray-50 rounded-md pt-8 pl-8 pr-8 flex flex-col flex-1">
      <h3 className="text-base font-medium">Score</h3>
      <UserRadialChart score={data.todayScore} />
    </div>
  )
}

export default DailyScore

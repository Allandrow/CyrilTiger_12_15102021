import React from 'react'
import AverageChart from '../averageChart/averageChart'
import Histogram from '../histogram/histogram'
import Performance from '../performance/performance'
import DailyScore from '../dailyScore/dailyScore'

const Charts = () => {
  return (
    <div className="flex-1">
      <Histogram />
      <div className='flex'>
        <AverageChart />
        <Performance />
        <DailyScore />
      </div>
    </div>
  )
}

export default Charts

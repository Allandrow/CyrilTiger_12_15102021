import React from 'react'
import AverageChart from '../averageChart/averageChart'
import Histogram from '../histogram/histogram'
import Performance from '../performance/performance'
import DailyScore from '../dailyScore/dailyScore'

const Charts = () => {
  return (
    <div className="flex-1 gap-8 flex flex-col">
      <Histogram />
      <div className="flex gap-8">
        <AverageChart />
        <Performance />
        <DailyScore />
      </div>
    </div>
  )
}

export default Charts

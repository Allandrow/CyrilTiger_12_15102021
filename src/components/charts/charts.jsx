import React from 'react'
import Histogram from '../histogram/histogram'
import Performance from '../performance/performance'
import DailyScore from '../dailyScore/dailyScore'
import AverageSession from '../averageSession/averageSession'

const Charts = () => {
  return (
    <div className="grid order-2 gap-8 col-span-4">
      <Histogram />
      <div className="grid gap-8 grid-cols-2">
        <AverageSession />
        <Performance />
        <DailyScore />
      </div>
    </div>
  )
}

export default Charts

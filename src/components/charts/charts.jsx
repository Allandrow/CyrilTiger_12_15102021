import React from 'react'
import Histogram from '../histogram/histogram'
import Performance from '../performance/performance'
import DailyScore from '../dailyScore/dailyScore'
import AverageSession from '../averageSession/averageSession'

/**
 * Charts component
 * @returns {ReactElement} React Component
 */
const Charts = () => {
  return (
    <div className="grid col-span-6 gap-4 xl:gap-8">
      <Histogram />
      <div className="grid gap-4 xl:gap-8 grid-cols-3 col-span-6">
        <AverageSession />
        <Performance />
        <DailyScore />
      </div>
    </div>
  )
}

export default Charts

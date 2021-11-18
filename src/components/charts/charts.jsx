import React from 'react'
import Histogram from '../histogram/histogram'
import Performance from '../performance/performance'
import DailyScore from '../dailyScore/dailyScore'
import AverageSession from '../averageSession/averageSession'
import PropTypes from 'prop-types'

/**
 * Charts component
 * @param {string} user user id
 */
const Charts = ({ user }) => {
  return (
    <div className="grid order-2 gap-8 col-span-4 xxl:col-span-6">
      <Histogram />
      <div className="grid gap-8 grid-cols-2 xxl:grid-cols-3">
        <AverageSession />
        <Performance />
        <DailyScore />
      </div>
    </div>
  )
}

Charts.propTypes = {
  user: PropTypes.string
}

export default Charts

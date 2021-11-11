import React from 'react'
import PropTypes from 'prop-types'
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

/**
 * Line Chart Component
 * @param {Array} data Objects array containing sessions length for each day
 */
const UserLineChart = ({ data }) => {
  const sessions = [
    { day: 0, sessionLength: 0 },
    ...data,
    { day: data.length + 1, sessionLength: 0 }
  ]
  const days = ['', 'L', 'M', 'M', 'J', 'V', 'S', 'D', '']
  sessions.map((item, i) => (item.day = days[i]))

  return (
    <LineChart data={sessions} width={400} height={260}>
      <XAxis
        dataKey="day"
        axisLine={false}
        tick={customAxisTick}
        tickLine={false}
      />
      <YAxis hide={true} />
      <Line
        type="monotone"
        dataKey="sessionLength"
        stroke="white"
        strokeWidth="2"
        isAnimationActive={false}
      />
      <Tooltip
        content={customToolTipLabel}
        allowEscapeViewBox={{ x: true }}
        isAnimationActive={false}
        cursor={<CustomCursor />}
      />
    </LineChart>
  )
}

const customToolTipLabel = ({ payload, active }) => {
  if (active) {
    return (
      <div className="bg-white p-2">
        <p className="font-medium text-xs">{payload[0].value} min</p>
      </div>
    )
  }
  return null
}

/**
 * Custom cursor on line chart hover
 * @param {array} points coordinates of data point
 * @param {number} height height of viewbox
 */
const CustomCursor = ({ points, height }) => {
  return (
    <rect
      x={points[0].x}
      y="0"
      height={height + 10}
      width="100%"
      fill="rgba(230, 0, 0, 0.4)"
    ></rect>
  )
}

const customAxisTick = ({ x, y, payload }) => {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <text fill="white" textAnchor="middle" x={0} y={0} dy={16}>
        {payload.value}
      </text>
    </g>
  )
}

UserLineChart.propTypes = {
  data: PropTypes.array.isRequired
}

CustomCursor.propTypes = {
  points: PropTypes.array,
  height: PropTypes.number
}

export default UserLineChart

import React from 'react'
import PropTypes from 'prop-types'
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

/**
 * Line Chart Component TODO
 * @param {Array} data Objects array containing sessions length for each day
 */
const UserLineChart = ({ data }) => {
  const sessions = [
    { day: 0, sessionLength: 0, hideTooltip: true },
    ...data,
    { day: data.length + 1, sessionLength: 0, hideTooltip: true }
  ]
  const days = ['', 'L', 'M', 'M', 'J', 'V', 'S', 'D', '']
  sessions.map((item, i) => (item.day = days[i]))

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={sessions} margin={{ top: 10 }}>
        <XAxis
          dataKey="day"
          axisLine={false}
          tick={customAxisTick}
          tickLine={false}
        />
        <YAxis hide={true} />
        <Tooltip
          content={<CustomToolTipLabel />}
          allowEscapeViewBox={{ x: true }}
          cursor={<CustomCursor />}
        />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="white"
          strokeWidth="2"
          strokeOpacity="0.8"
          isAnimationActive={false}
          dot={false}
          activeDot={customActiveDot}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

/**
 * Custom tooltip on hover
 * @param {object} payload data
 * @param {boolean} active boolean to control if tooltip should be shown or not
 */
const CustomToolTipLabel = ({ payload, active }) => {
  if (active && !payload[0].payload.hideTooltip) {
    return (
      <div className="bg-white p-2">
        <p className="font-medium text-xs">{payload[0].value} min</p>
      </div>
    )
  }
  return null
}

/**
 * Custom dot appearing on the line on hover
 * @param {number} cx x coordinate
 * @param {number} cy y coordinate
 * @param {object} payload data
 */
const customActiveDot = ({ cx, cy, payload }) => {
  if (!payload.hideTooltip) {
    return (
      <circle
        cx={cx}
        cy={cy}
        r="4"
        fill="white"
        strokeWidth="10"
        stroke="white"
        strokeOpacity="0.4"
      ></circle>
    )
  }

  return null
}

/**
 * Custom cursor on line chart hover React component, since Recharts doesn't allow function as argument for custom cursors
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

/**
 * Custom axis ticks
 * @param {number} x x coordinate
 * @param {number} y y coordinate
 * @param {object} payload data
 */
const customAxisTick = ({ x, y, payload }) => {
  return (
    <g transform={`translate(${x}, ${y + 5})`}>
      <text
        fill="white"
        textAnchor="middle"
        fillOpacity="0.8"
        x={0}
        y={0}
        dy={16}
      >
        {payload.value}
      </text>
    </g>
  )
}

UserLineChart.propTypes = {
  data: PropTypes.array.isRequired
}

CustomToolTipLabel.propTypes = {
  payload: PropTypes.array,
  active: PropTypes.bool
}

CustomCursor.propTypes = {
  points: PropTypes.array,
  height: PropTypes.number
}

export default UserLineChart

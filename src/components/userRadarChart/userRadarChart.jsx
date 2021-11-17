import React from 'react'
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer
} from 'recharts'
import PropTypes from 'prop-types'

/**
 * Radar Chart Component
 * @param {Object} kind Categories
 * @param {Array} data Values for each category
 */
const UserRadarChart = ({ kind, data }) => {
  const performance = data.map((item) => {
    return {
      value: item.value,
      kind: kind[item.kind]
    }
  })

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={performance} margin={{ left: 35, right: 35 }}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" tick={customTicks} />
        <PolarRadiusAxis angle={30} domain={[0, 'auto']} tick={false} />
        <Radar
          dataKey="value"
          stroke="red"
          fill="red"
          fillOpacity={0.8}
          isAnimationActive={false}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}

const customTicks = (data) => {
  return (
    <text
      type={data.type}
      cx={data.cx}
      cy={data.cy}
      orientation={data.orientation}
      radius={data.radius}
      stroke={data.stroke}
      x={data.x}
      y={data.y}
      textAnchor={data.textAnchor}
    >
      <tspan
        x={data.payload.coordinate.x}
        dy={5}
        fontSize="0.75rem"
        className="capitalize"
      >
        {data.payload.value}
      </tspan>
    </text>
  )
}

UserRadarChart.propTypes = {
  kind: PropTypes.object,
  data: PropTypes.array
}

export default UserRadarChart

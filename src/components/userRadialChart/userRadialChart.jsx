import React from 'react'
import PropTypes from 'prop-types'
import {
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer
} from 'recharts'

/**
 * Radial Chart Component
 * @param {number} score daily score
 */
const userRadialChart = ({ score }) => {
  const data = [{ score: score }]
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        innerRadius={75}
        barSize={10}
        startAngle={90}
        endAngle={90 + 360}
        data={data}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 1]}
          angleAxisId={0}
          tick={false}
        />
        <circle cx="50%" cy="50%" fill="white" r="70"></circle>
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
          <tspan dy="-20" fill="#282D30" className="font-bold text-2xl">
            {score * 100}%
          </tspan>
          <tspan x="50%" dy="26" fill="#74798C" className="font-medium">
            de votre
          </tspan>
          <tspan x="50%" dy="26" fill="#74798C" className="font-medium">
            objectif
          </tspan>
        </text>
        <RadialBar clockWise dataKey="score" cornerRadius={10} fill="#FF0000" />
      </RadialBarChart>
    </ResponsiveContainer>
  )
}

userRadialChart.propTypes = {
  score: PropTypes.number.isRequired
}

export default userRadialChart

import React from 'react'
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer
} from 'recharts'
import { getUserPerformance } from '../../hooks/getUserPerformance'
import Loader from '../loader/loader'

const Performance = () => {
  const { loading, error, data } = getUserPerformance()
  let performance = []

  if (data) {
    performance = data.data.map((item) => {
      return {
        value: item.value,
        kind: data.kind[item.kind]
      }
    })
  }

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <div className="flex-1">{error}</div>
  }

  return (
    <div className="flex-1 rounded bg-secondary p-4 fill-current text-white">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={performance}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" tick={customTicks} />
          <PolarRadiusAxis
            angle={30}
            domain={[0, Math.max(...performance.map((item) => item.value))]}
            tick={false}
          />
          <Radar dataKey="value" stroke="red" fill="red" fillOpacity={0.8} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
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

export default Performance

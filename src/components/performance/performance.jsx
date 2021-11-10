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
    return <div className="flex-1">Loading</div>
  }

  if (error) {
    return <div className="flex-1">{error}</div>
  }

  return (
    <div className="flex-1 rounded bg-secondary p-4 fill-current text-white">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={performance}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" />
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

export default Performance

import React from 'react'
import PropTypes from 'prop-types'
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

/**
 * Bar Chart Component
 * @param {array} data daily activity
 * @returns
 */
const UserBarChart = ({ data }) => {
  const activity = data.map((item, i) => {
    return {
      day: i + 1,
      kilogram: item.kilogram,
      calories: item.calories
    }
  })
  const {
    weightDomainMin,
    weightDomainMax,
    calorieDomainMin,
    calorieDomainMax
  } = getDomains(activity)

  return (
    <ResponsiveContainer height="100%" width="100%">
      <BarChart
        height="250"
        width="100%"
        data={activity}
        margin={{ top: 20, bottom: 20 }}
        barGap={8}
      >
        <XAxis dataKey="day" tickMargin={10} />
        <YAxis
          dataKey="kilogram"
          domain={[weightDomainMin, weightDomainMax]}
          tickCount="3"
          orientation="right"
          yAxisId="kilogram"
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          dataKey="calories"
          yAxisId="calories"
          domain={[calorieDomainMin, calorieDomainMax]}
          hide={true}
        />
        <CartesianGrid
          vertical={false}
          strokeDasharray="4 4"
          horizontalPoints={[20, 113]}
        />
        <Tooltip content={customToolTip} />
        <Bar
          dataKey="kilogram"
          fill="#282D30"
          isAnimationActive={false}
          yAxisId="kilogram"
          barSize={7}
          legendType="circle"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="calories"
          fill="#E60000"
          isAnimationActive={false}
          yAxisId="calories"
          barSize={7}
          legendType="circle"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

/**
 * Return min/max values to setup domain of axis for weight and calories
 * @param {array} data user activity data
 * @returns {object} min and max for weights and calories data values
 */
const getDomains = (data) => {
  // weight data + scale
  const weight = data.map((item) => item.kilogram)
  const weightMin = Math.min(...weight)
  const weightMax = Math.max(...weight)
  // calorie data + scale
  const calories = data.map((item) => item.calories)
  const caloriesMin = Math.min(...calories)
  const caloriesMax = Math.max(...calories)

  // weight domain
  const weightRange = (weightMax - weightMin) * 2
  const weightAverage = Math.floor(
    weight.reduce((a, b) => a + b) / weight.length
  )
  const weightDomainMin = weightAverage - weightRange / 2
  const weightDomainMax = weightAverage + weightRange / 2

  // calories domain
  const caloriesRange = (caloriesMax - caloriesMin) * 2
  const caloriesAverage = Math.floor(
    calories.reduce((a, b) => a + b) / calories.length
  )
  const calorieDomainMin = caloriesAverage - caloriesRange / 2
  const calorieDomainMax = caloriesAverage + caloriesRange / 2

  return {
    weightDomainMin,
    weightDomainMax,
    calorieDomainMin,
    calorieDomainMax
  }
}

const customToolTip = ({ payload, active }) => {
  if (active) {
    return (
      <div className="bg-barRed flex flex-col text-white gap-4 p-4 text-sm">
        <span>{payload[0].value}kg</span>
        <span>{payload[1].value}Kcal</span>
      </div>
    )
  }

  return null
}

UserBarChart.propTypes = {
  data: PropTypes.array.isRequired
}

export default UserBarChart

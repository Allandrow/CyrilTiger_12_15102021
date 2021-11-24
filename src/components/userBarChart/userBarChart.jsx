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
 * @param {Array} data user daily activity
 * @returns {ReactElement} ReactComponent with svg Charts
 */
const UserBarChart = ({ data }) => {
  const activity = data.map((item, i) => {
    const { day, ...rest } = item
    return {
      day: i + 1,
      ...rest
    }
  })
  const { weightDomainMin, weightDomainMax, calorieDomainMax } =
    getDomains(activity)

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
          domain={[0, calorieDomainMax]}
          hide={true}
        />
        <Tooltip
          content={<CustomToolTip />}
          isAnimationActive={false}
          cursor={{ opacity: 0.6 }}
        />
        <CartesianGrid
          vertical={false}
          strokeDasharray="4 4"
          horizontalPoints={[20, 113]}
        />
        <Bar
          dataKey="kilogram"
          fill="#282D30"
          yAxisId="kilogram"
          barSize={7}
          legendType="circle"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="calories"
          fill="#E60000"
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
 * @param {Array} data user activity data
 * @returns {Object} min and max for weights and calories data values
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
  const calorieDomainMax = caloriesAverage + caloriesRange / 2

  return {
    weightDomainMin,
    weightDomainMax,
    calorieDomainMax
  }
}

/**
 * Custom Tooltip Component displayed on hover
 * @param {Array} payload data
 * @param {Boolean} active active state
 * @returns {ReactElement|null} React Component if active, null otherwise
 */
const CustomToolTip = ({ payload, active }) => {
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

CustomToolTip.propTypes = {
  payload: PropTypes.array,
  active: PropTypes.bool
}

export default UserBarChart

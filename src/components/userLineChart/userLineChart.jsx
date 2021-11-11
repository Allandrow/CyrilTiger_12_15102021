import React from 'react'
import PropTypes from 'prop-types'
import {
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

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
      <XAxis dataKey="days" axisLine={false} />
      <YAxis hide={true} />
      <Line
        type="monotone"
        dataKey="sessionLength"
        stroke="white"
        strokeWidth="2"
        isAnimationActive={false}
      />
      <Tooltip itemStyle={{ color: 'black' }} />
    </LineChart>
  )
}

UserLineChart.propTypes = {
  data: PropTypes.array.isRequired
}

export default UserLineChart

// const makeSVG = (data) => {
//   const width = 245
//   const height = 180
//   const margin = 15
//   const days = ['', 'L', 'M', 'M', 'J', 'V', 'S', 'D', '']

//   let svg = d3.select('#averageSessions svg')
//   svg.remove()
//   svg = d3
//     .select('#averageSessions')
//     .append('svg')
//     .attr('width', width + margin)
//     .attr('height', height)

//   // x scale
//   const xScale = d3
//     .scaleLinear()
//     .domain([0, data.length - 1])
//     .range([0, width - margin * 2])

//   // y scale
//   const sessions = [0, ...data.map((item) => item.sessionLength), 100]
//   const yScale = d3
//     .scaleLinear()
//     .domain([d3.min(sessions), d3.max(sessions)])
//     .range([height - 60, 0])

//   // data blocks
//   const blocks = svg
//     .selectAll('.block')
//     .data(data)
//     .enter()
//     .append('g')
//     .attr('class', 'block')

//   blocks
//     .append('rect')
//     .attr('x', (d, i) => ((width + margin) / data.length) * i)
//     .attr('y', 0)
//     .attr('height', height - margin * 2)
//     .attr('width', (d) => '100%')
//     .attr('class', 'background fill-current text-red-700')
//     .attr('style', 'opacity: 0')

//   // data points
//   blocks
//     .append('circle')
//     .attr('class', 'dot')
//     .attr('cx', (d, i) => ((width + margin) / data.length) * i + margin)
//     .attr('cy', (d) => yScale(d.sessionLength))
//     .attr('r', 5)
//     .attr('fill', 'transparent')

//   blocks
//     .append('rect')
//     .attr('x', (d, i) => ((width + margin) / data.length) * i)
//     .attr('y', 0)
//     .attr('height', height - margin * 2)
//     .attr('width', (d) => (width + margin) / data.length)
//     .attr('fill', 'transparent')
//     .on('mouseenter', function () {
//       d3.select(this.parentNode).selectAll('.dot').attr('fill', 'white')
//       d3.select(this.parentNode)
//         .selectAll('.background')
//         .attr('style', 'opacity:1')
//     })
//     .on('mouseleave', function () {
//       d3.select(this.parentNode).selectAll('.dot').attr('fill', 'transparent')
//       d3.select(this.parentNode)
//         .selectAll('.background')
//         .attr('style', 'opacity:0')
//     })

//   const group = svg.append('g').attr('transform', `translate(-${margin}, 0)`)

//   // line
//   const line = d3
//     .line()
//     .x((d, i) => xScale(i))
//     .y((d) => yScale(d))
//     .curve(d3.curveNatural)

//   // path
//   group
//     .append('path')
//     .datum(sessions)
//     .attr('d', line)
//     .attr('fill', 'none')
//     .attr('stroke', 'white')
//     .attr('stroke-width', 2)

//   // x axis
//   group
//     .append('g')
//     .attr('transform', `translate(0, ${height})`)
//     .selectAll('text')
//     .data(days)
//     .enter()
//     .append('text')
//     .text((d) => d)
//     .attr('dx', (d, i) => xScale(i))
//     .attr('fill', 'white')
//     .attr('text-anchor', 'middle')
// }

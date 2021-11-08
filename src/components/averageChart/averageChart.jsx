import React from 'react'
import { getUserAverageSessions } from '../../hooks/getUserAverageSessions'
import * as d3 from 'd3'

const AverageChart = () => {
  const { loading, error, data } = getUserAverageSessions()

  if (data) {
    makeSVG(data.sessions)
  }

  if (loading) {
    return <div className="flex-1">Loading</div>
  }

  if (error) {
    return <div className="flex-1">{error}</div>
  }

  return (
    <div className="flex-1 bg-primary rounded-md">
      <h3 className="text-white opacity-70 mt-8 ml-8 text-base font-medium">
        Durée moyenne des <br /> sessions
      </h3>
      <div id="averageSessions"></div>
    </div>
  )
}

const makeSVG = (data) => {
  const width = 245
  const height = 180
  const margin = 15
  const days = ['', 'L', 'M', 'M', 'J', 'V', 'S', 'D', '']

  let svg = d3.select('#averageSessions svg')
  svg.remove()
  svg = d3
    .select('#averageSessions')
    .append('svg')
    .attr('width', width + margin)
    .attr('height', height)

  const group = svg.append('g').attr('transform', `translate(-${margin}, 0)`)

  // x scale
  const xScale = d3
    .scaleLinear()
    .domain([0, data.length - 1])
    .range([0, width - margin * 2])

  // y scale
  const sessions = [0, ...data.map((item) => item.sessionLength), 100]
  const yScale = d3
    .scaleLinear()
    .domain([d3.min(sessions), d3.max(sessions)])
    .range([height - 60, 10])

  // line
  const line = d3
    .line()
    .x((d, i) => xScale(i))
    .y((d) => yScale(d))
    .curve(d3.curveNatural)

  // path
  group
    .append('path')
    .datum(sessions)
    .attr('d', line)
    .attr('fill', 'none')
    .attr('stroke', 'white')
    .attr('stroke-width', 2)

  // x axis
  group
    .append('g')
    .attr('transform', `translate(0, ${height - 20})`)
    .selectAll('text')
    .data(days)
    .enter()
    .append('text')
    .text((d) => d)
    .attr('dx', (d, i) => xScale(i))
    .attr('fill', 'white')
    .attr('text-anchor', 'middle')

  // data points
  group
    .selectAll('.dot')
    .data(sessions)
    .enter()
    .append('circle')
    .attr('class', 'dot')
    .attr('cx', (d, i) => xScale(i))
    .attr('cy', (d) => yScale(d))
    .attr('r', 5)
    .attr('fill', 'white')
    .on('mouseenter', function () {
      d3.select(this).attr('fill', 'white')
    })
    .on('mouseleave', function () {
      d3.select(this).attr('fill', 'transparent')
    })
}

export default AverageChart

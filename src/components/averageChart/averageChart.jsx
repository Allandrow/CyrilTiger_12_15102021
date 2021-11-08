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
      <h3 className="text-white opacity-70 mt-8 ml-8 leading-8 text-base font-medium">
        Durée moyenne des <br /> sessions
      </h3>
      <div id="averageSessions"></div>
    </div>
  )
}

const makeSVG = (data) => {
  const width = 260
  const height = 180
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

  let svg = d3.select('#averageSessions svg')
  svg.remove()
  svg = d3
    .select('#averageSessions')
    .append('svg')
    .attr('width', width)
    .attr('height', height)

  // x scale
  const xScale = d3.scaleLinear().domain([0, 6]).range([0, width])

  // y scale
  const sessions = data.map((item) => item.sessionLength)
  const yScale = d3
    .scaleLinear()
    .domain([d3.min(sessions), d3.max(sessions)])
    .range([40, height - 40])

  // line
  const line = d3
    .line()
    .x((d, i) => xScale(i))
    .y((d) => yScale(d))
    .curve(d3.curveNatural)

  // path
  svg
    .append('path')
    .datum(sessions)
    .attr('d', line)
    .attr('fill', 'none')
    .attr('stroke', 'white')
    .attr('stroke-width', 2)

  // x axis
  svg
    .append('g')
    .attr('transform', `translate(0, ${height - 20})`)
    .selectAll('text')
    .data(days)
    .enter()
    .append('text')
    .text((d) => d)
    .attr('dx', (d, i) => (width / days.length) * i + 15)
    .attr('fill', 'white')

  // data points
  // svg
  //   .selectAll('.dot')
  //   .data(sessions)
  //   .enter()
  //   .append('circle')
  //   .attr('class', 'dot')
  //   .attr('cx', (d, i) => xScale(i))
  //   .attr('cy', (d) => yScale(d))
  //   .attr('r', 5)
}

export default AverageChart

import React, { useEffect } from 'react'
import * as d3 from 'd3'
import PropTypes from 'prop-types'

/**
 * Bar Chart Component
 * @param {array} activity daily activity
 * @returns
 */
const UserBarChart = ({ activity }) => {
  useEffect(() => {
    makeSVG(activity)
  }, [activity])

  return <div id="histogram"></div>
}

const makeLine = (container, xStart, xEnd, y, dash = false) => {
  const line = container
    .append('line')
    .attr('x1', xStart)
    .attr('x2', xEnd)
    .attr('y1', y)
    .attr('y2', y)

  if (dash) line.attr('stroke-dasharray', '4 4')
}

const makeLayout = (svg, { height, width, margin }) => {
  const halfHeight = height / 2 + margin

  const layout = svg
    .append('g')
    .attr('stroke', '#DEDEDE')
    .attr('stroke-width', '1')

  makeLine(layout, 0, width, height + margin)
  makeLine(layout, 0, width, halfHeight, true)
  makeLine(layout, 0, width, margin, true)
}

const makeData = (svg, { height, width, margin }, data) => {
  const blockSize = width / data.length
  const dataGroup = svg.append('g').attr('id', 'dataBars')
  const grayColor = '#DEDEDE'

  // weight data + scale
  const weight = data.map((item) => item.kilogram)
  const weightMin = Math.min(...weight)
  const weightMax = Math.max(...weight)

  const weightRange = (weightMax - weightMin) * 2
  const weightAverage = Math.floor(
    weight.reduce((a, b) => a + b) / weight.length
  )
  const weightDomainMin = weightAverage - weightRange / 2
  const weightDomainMax = weightAverage + weightRange / 2

  // calorie data + scale
  const calories = data.map((item) => item.calories)
  const caloriesMin = Math.min(...calories)
  const caloriesMax = Math.max(...calories)

  const caloriesRange = (caloriesMax - caloriesMin) * 2
  const caloriesAverage = Math.floor(
    calories.reduce((a, b) => a + b) / calories.length
  )
  const calorieDomainMin = caloriesAverage - caloriesRange / 2
  const calorieDomainMax = caloriesAverage + caloriesRange / 2

  const calorieScale = d3
    .scaleLinear()
    .domain([calorieDomainMin, calorieDomainMax])
    .range([0, 145])

  const weightScale = d3
    .scaleLinear()
    .domain([weightDomainMin, weightDomainMax])
    .range([0, 145])

  const dataBlocks = dataGroup
    .selectAll('g')
    .data(data)
    .enter()
    .append('g')
    .attr('class', 'data')
    .on('mouseenter', function () {
      d3.select(this).selectAll('.hover').attr('style', 'opacity: 0.5')
      d3.select(this).selectAll('.tooltip').attr('style', 'visibility:visible')
    })
    .on('mouseleave', function () {
      d3.select(this).selectAll('.hover').attr('style', 'opacity: 0')
      d3.select(this).selectAll('.tooltip').attr('style', 'visibility:hidden')
    })

  // data block hover rectangle
  dataBlocks
    .append('rect')
    .attr('class', 'hover')
    .attr('fill', grayColor)
    .attr('width', blockSize)
    .attr('height', height)
    .attr('x', (d, i) => blockSize * i)
    .attr('y', margin)
    .attr('style', 'opacity: 0')

  // tooltips
  const infos = dataBlocks
    .append('g')
    .attr('class', 'tooltip')
    .attr('style', 'visibility:hidden')

  infos
    .append('rect')
    .attr('class', 'infos')
    .attr('fill', 'red')
    .attr('width', '60')
    .attr('height', '50')
    .attr('rx', '2')
    .attr('x', (d, i) => blockSize * i + blockSize - 40)
    .attr('y', 0)

  infos
    .append('text')
    .text((d) => d.kilogram + 'kg')
    .attr('fill', 'white')
    .attr('x', (d, i) => blockSize * i + blockSize - 10)
    .attr('y', 20)
    .attr('style', 'font-size:0.75rem')
    .attr('text-anchor', 'middle')

  infos
    .append('text')
    .text((d) => d.calories + 'kCal')
    .attr('fill', 'white')
    .attr('x', (d, i) => blockSize * i + blockSize - 10)
    .attr('y', 40)
    .attr('style', 'font-size:0.75rem')
    .attr('text-anchor', 'middle')

  // data block X axis information
  dataBlocks
    .append('text')
    .text((d, i) => i + 1)
    .attr('y', height + margin * 2)
    .attr('dx', (d, i) => blockSize * i + blockSize / 2)
    .attr('fill', grayColor)

  // weight data bars
  dataBlocks
    .append('rect')
    .attr('y', (d) => height - weightScale(d.kilogram) + margin)
    .attr('x', (d, i) => blockSize * i + blockSize / 2 - 25)
    .attr('width', 10)
    .attr('data-weight', (d) => d.kilogram)
    .attr('height', (d) => weightScale(d.kilogram))
    .attr('class', 'weightBar fill-current text-secondary')

  // calorie data bars
  dataBlocks
    .append('rect')
    .attr('class', 'calorieBar')
    .attr('y', (d) => height + margin - calorieScale(d.calories))
    .attr('x', (d, i) => blockSize * i + blockSize / 2 + 15)
    .attr('width', 10)
    .attr('height', (d) => calorieScale(d.calories))
    .attr('fill', 'red')

  // data Y axis information
  const yAxis = dataGroup
    .append('g')
    .attr('dominant-baseline', 'middle')
    .attr('fill', grayColor)
  yAxis
    .append('text')
    .text(weightDomainMin)
    .attr('transform', `translate(${width + margin}, ${height + margin})`)

  yAxis
    .append('text')
    .text((weightDomainMin + weightDomainMax) / 2)
    .attr('transform', `translate(${width + margin}, ${height / 2 + margin})`)
  yAxis
    .append('text')
    .text(weightDomainMax)
    .attr('transform', `translate(${width + margin}, ${margin})`)
}

const makeSVG = (data) => {
  const margin = 30
  const width = 740
  const height = 145
  const fullWidth = width + margin * 2
  const fullHeight = height + margin * 2
  const sizes = {
    height,
    width,
    margin
  }

  // svg canvas
  let svg = d3.select('#histogram svg')
  svg.remove()
  svg = d3
    .select('#histogram')
    .append('svg')
    .attr('width', fullWidth)
    .attr('height', fullHeight)

  makeLayout(svg, sizes)
  makeData(svg, sizes, data)
}

UserBarChart.propTypes = {
  activity: PropTypes.array.isRequired
}

export default UserBarChart

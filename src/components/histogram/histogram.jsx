import React from 'react'
import * as d3 from 'd3'
import { getUserActivity } from '../../hooks/getUserActivity'

const Histogram = () => {
  const { loading, error, data } = getUserActivity()

  if (data) {
    const activity = data.sessions
    makeSVG(activity)
  }

  if (loading) {
    return <div className="bg-gray-50 rounded-md p-4">Loading</div>
  }

  if (error) {
    return <div className="bg-gray-50 rounded-md p-4">{error}</div>
  }

  return (
    <div className="bg-gray-50 rounded-md p-8">
      <div className="flex justify-between">
        <h3 className="font-medium">Activité quotidienne</h3>
        <div className="flex gap-4 font-medium text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="block w-2 h-2 bg-black rounded"></span>
            <span>Poids (kg)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="block w-2 h-2 rounded bg-red-500"></span>
            <span>Calories brûlées (kCal)</span>
          </div>
        </div>
      </div>
      <div id="histogram"></div>
    </div>
  )
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
    .range([145, 0])

  const weightScale = d3
    .scaleLinear()
    .domain([weightDomainMin, weightDomainMax])
    .range([145, 0])

  const dataBlocks = dataGroup
    .selectAll('g')
    .data(data)
    .enter()
    .append('g')
    .attr('class', 'data')
    .on('mouseenter', function () {
      d3.select(this).selectAll('.hover').attr('style', 'opactity: 0.3')
    })
    .on('mouseleave', function () {
      d3.select(this).selectAll('.hover').attr('style', 'opacity: 0')
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
    .attr('class', 'weightBar')
    .attr('y', (d) => height + margin - weightScale(d.kilogram))
    .attr('x', (d, i) => blockSize * i + blockSize / 2 - 25)
    .attr('width', 10)
    .attr('height', (d) => weightScale(d.kilogram))
    .attr('fill', 'black')

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
  const yAxis = dataGroup.append('g').attr('dominant-baseline', 'middle').attr('fill', grayColor)
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

export default Histogram

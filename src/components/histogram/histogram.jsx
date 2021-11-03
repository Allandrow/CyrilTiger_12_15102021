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
    <div className="bg-gray-50 rounded-md p-4">
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

const makeLayout = (container, height, width, margin) => {
  const halfHeight = height / 2 + margin
  makeLine(container, 0, width, height + margin)
  makeLine(container, 0, width, halfHeight, true)
  makeLine(container, 0, width, margin, true)
}

const makeSVG = (data) => {
  const margin = 30
  const width = 740
  const height = 145
  const fullWidth = width + margin * 2
  const fullHeight = height + margin * 2

  // svg canvas
  let svg = d3.select('#histogram svg')
  svg.remove()
  svg = d3
    .select('#histogram')
    .append('svg')
    .attr('width', fullWidth)
    .attr('height', fullHeight)

  const layout = svg
    .append('g')
    .attr('stroke', '#DEDEDE')
    .attr('stroke-width', '1')

  makeLayout(layout, height, width, margin)
}

export default Histogram

// .append('g')
// .attr('transform', `translate(${margin}, ${margin})`)

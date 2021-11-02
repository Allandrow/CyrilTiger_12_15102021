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

const makeSVG = (data) => {
  const width = 740
  const height = 145
  const margin = 30

  // svg canvas
  d3.select('#histogram')
    .append('svg')
    .attr('width', width + margin * 2)
    .attr('height', height + margin * 2)
    .append('g')
    .attr('transform', `translate(${margin}, ${margin})`)
}

export default Histogram

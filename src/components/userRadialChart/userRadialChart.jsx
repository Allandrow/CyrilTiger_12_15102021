import React from 'react'
import * as d3 from 'd3'
import PropTypes from 'prop-types'

/**
 * Radial Chart Component
 * @param {number} score daily score
 */
const userRadialChart = ({ score }) => {
  makeSVG(score)
  return <div id="dailyScore"></div>
}

export default userRadialChart

const makeCircle = (container, center, radius) => {
  container
    .append('circle')
    .attr('transform', `translate(${center}, ${center})`)
    .attr('r', radius)
    .attr('fill', 'white')
}

const makeTextGroup = (container, center) => {
  const textGroup = container
    .append('text')
    .attr('x', center)
    .attr('y', center - 16)
    .attr('text-anchor', 'middle')
    .attr('dominant-baseline', 'middle')
    .attr('class', 'font-medium')
    .attr('fill', '#74798C')

  textGroup.append('tspan').text('de votre').attr('dy', '26').attr('x', center)
  textGroup.append('tspan').text('objectif').attr('dy', '26').attr('x', center)
}

const makeScoreText = (container, center, text) => {
  container
    .append('text')
    .text(text)
    .attr('fill', '#282D30')
    .attr('transform', `translate(${center}, ${center - 16})`)
    .attr('text-anchor', 'middle')
    .attr('dominant-baseline', 'middle')
    .attr('class', 'font-bold text-2xl')
}

const makeArc = (container, radius, width, center, score) => {
  const arc = d3
    .arc()
    .innerRadius(radius)
    .outerRadius(radius + width)
    .cornerRadius(width / 2)
    .startAngle(0)
    .endAngle(score * Math.PI * -2)

  container
    .append('path')
    .style('fill', 'red')
    .attr('transform', `translate(${center}, ${center})`)
    .attr('d', arc)
}

const makeSVG = (score) => {
  const formatedScore = new Intl.NumberFormat('fr', {
    style: 'percent'
  }).format(score)

  const height = 220
  const width = 220
  const center = height / 2
  const radius = 80
  const arcWidth = 10

  // svg canvas
  const svg = d3
    .select('#dailyScore')
    .append('svg')
    .attr('width', width)
    .attr('height', height)

  makeCircle(svg, center, radius)
  makeTextGroup(svg, center)
  makeArc(svg, radius, arcWidth, center, score)
  makeScoreText(svg, center, formatedScore)
}

userRadialChart.propTypes = {
  score: PropTypes.number.isRequired
}

import React from 'react'
import caloriesIcon from './calories.svg'
import proteinesIcon from './proteines.svg'
import glucidesIcon from './glucides.svg'
import lipidesIcon from './lipides.svg'
import PropTypes from 'prop-types'

/**
 * Create a key data card
 * @param {number} value Numeric value of data
 * @param {string} type Type of data
 */

const KeyData = ({ value, type }) => {
  const { icon, text, background, unit } = dataTypes[type]

  return (
    <div className="bg-gray-50 p-8 rounded-md flex gap-6 w-64">
      <div
        className={`flex justify-center items-center w-icon h-icon rounded-md bg-${background}-100`}
      >
        <img src={icon} alt={text} />
      </div>
      <div className="flex flex-col justify-center gap-2">
        <strong className="font-bold text-xl">{`${value}${unit}`}</strong>
        <span className="text-gray-500 text-sm">{text}</span>
      </div>
    </div>
  )
}

const dataTypes = {
  calorieCount: {
    icon: caloriesIcon,
    text: 'Calories',
    background: 'red',
    unit: 'kCal'
  },
  carbohydrateCount: {
    icon: glucidesIcon,
    text: 'Glucides',
    background: 'yellow',
    unit: 'g'
  },
  proteinCount: {
    icon: proteinesIcon,
    text: 'Protéines',
    background: 'blue',
    unit: 'g'
  },
  lipidCount: {
    icon: lipidesIcon,
    text: 'Lipides',
    background: 'pink',
    unit: 'g'
  }
}

KeyData.propTypes = {
  value: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
}

export default KeyData

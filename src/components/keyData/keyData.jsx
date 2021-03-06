import React from 'react'
import caloriesIcon from './calories.svg'
import proteinesIcon from './proteines.svg'
import glucidesIcon from './glucides.svg'
import lipidesIcon from './lipides.svg'
import PropTypes from 'prop-types'

/**
 * Key Data Card component
 * @param {number} value Numeric value of data
 * @param {string} type Type of data
 * @returns {ReactElement} React Component
 */
const KeyData = ({ value, type }) => {
  const { icon, text, background, unit } = dataTypes[type]
  const formatedValue = new Intl.NumberFormat('en-GB').format(value)

  return (
    <div className="bg-gray-50 p-4 xl:p-8 rounded-md flex gap-2 xl:gap-4 max-w-xs">
      <div
        className={`flex justify-center items-center w-12 h-12 xl:w-icon xl:h-icon rounded-md bg-${background}-100`}
      >
        <img src={icon} alt={text} />
      </div>
      <div className="flex flex-col justify-center gap-1">
        <strong className="font-bold text-medium xl:text-xl">{`${formatedValue}${unit}`}</strong>
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
  value: PropTypes.number,
  type: PropTypes.string
}

export default KeyData

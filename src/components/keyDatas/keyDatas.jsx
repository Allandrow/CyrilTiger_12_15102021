import React from 'react'
import KeyData from '../keyData/keyData'
import PropTypes from 'prop-types'

/**
 * Section of key data cards
 * @param {number} calorieCount numeric value of calories
 * @param {number} proteinCount numeric value of proteins
 * @param {number} carbohydrateCount numeric value of carbohydrates
 * @param {number} lipidCount numeric value of lipids
 */

const KeyDatas = ({
  calorieCount,
  proteinCount,
  carbohydrateCount,
  lipidCount
}) => {
  return (
    <div className='flex flex-col justify-between h-full'>
      <KeyData value={calorieCount} type="calorieCount" />
      <KeyData value={proteinCount} type="proteinCount" />
      <KeyData value={carbohydrateCount} type="carbohydrateCount" />
      <KeyData value={lipidCount} type="lipidCount" />
    </div>
  )
}

KeyDatas.propTypes = {
  calorieCount: PropTypes.number.isRequired,
  proteinCount: PropTypes.number.isRequired,
  carbohydrateCount: PropTypes.number.isRequired,
  lipidCount: PropTypes.number.isRequired
}

export default KeyDatas

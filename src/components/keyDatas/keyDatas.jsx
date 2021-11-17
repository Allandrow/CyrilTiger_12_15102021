import React from 'react'
import { getUserInfos } from '../../hooks/getUserInfos'
import KeyData from '../keyData/keyData'

const KeyDatas = () => {
  const { loading, error, data } = getUserInfos()

  if (loading) {
    return <div className="grid col-span-4 order-1 grid-cols-4">Loading</div>
  }

  if (error) {
    return <div className="grid col-span-4 order-1 grid-cols-4">{error}</div>
  }

  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = data
    ? data.keyData
    : NaN

  return (
    <div className="grid col-span-4 order-1 grid-cols-4 gap-8 xxl:order-2 xxl:col-span-2 xxl:flex xxl:flex-col xxl:justify-between">
      <KeyData value={calorieCount} type="calorieCount" />
      <KeyData value={proteinCount} type="proteinCount" />
      <KeyData value={carbohydrateCount} type="carbohydrateCount" />
      <KeyData value={lipidCount} type="lipidCount" />
    </div>
  )
}

export default KeyDatas

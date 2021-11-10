import React from 'react'
import { getUserInfos } from '../../hooks/getUserInfos'
import KeyData from '../keyData/keyData'
import Loader from '../loader/loader'
import Error from '../error/error'

const KeyDatas = () => {
  const { loading, error, data } = getUserInfos()

  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = data
    ? data.keyData
    : NaN

  if (loading) {
    // TODO : Add className props to Loader to customize component
    // return <div className="flex flex-col justify-between h-full">Loading</div>
    return <Loader />
  }

  if (error) {
    // return <div className="flex flex-col justify-between h-full">{error}</div>
    return <Error />
  }

  return (
    <div className="flex flex-col justify-between h-full">
      <KeyData value={calorieCount} type="calorieCount" />
      <KeyData value={proteinCount} type="proteinCount" />
      <KeyData value={carbohydrateCount} type="carbohydrateCount" />
      <KeyData value={lipidCount} type="lipidCount" />
    </div>
  )
}

export default KeyDatas

import React from 'react'
import { useParams } from 'react-router-dom'
import { getUserInfos } from '../../hooks/getUserInfos'
import KeyData from '../keyData/keyData'

/**
 * Wrapper component fetching user infos and injecting it in multiple KeyData component
 * @returns {ReactElement} React Component
 */
const KeyDatas = () => {
  const { userId } = useParams()
  const { loading, error, data } = getUserInfos(userId)

  if (loading) {
    return (
      <div className="col-span-2 flex flex-col xl:justify-between gap-8">
        Loading
      </div>
    )
  }

  if (error) {
    return (
      <div className="col-span-2 flex flex-col xl:justify-between gap-8">
        Something went wrong while getting your key datas !
      </div>
    )
  }

  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } =
    data.keyData

  return (
    <div className="col-span-2 flex flex-col xl:justify-between gap-8">
      <KeyData value={calorieCount} type="calorieCount" />
      <KeyData value={proteinCount} type="proteinCount" />
      <KeyData value={carbohydrateCount} type="carbohydrateCount" />
      <KeyData value={lipidCount} type="lipidCount" />
    </div>
  )
}

export default KeyDatas

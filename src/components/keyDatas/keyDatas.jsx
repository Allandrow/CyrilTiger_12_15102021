import React, { useEffect, useState } from 'react'
import KeyData from '../keyData/keyData'
import { getKeyData } from '../../services'

const KeyDatas = () => {
  const [keyData, setKeyData] = useState(null)

  useEffect(() => {
    getKeyData(setKeyData)
  }, [])

  if (keyData) {
    return (
      <div className="flex flex-col justify-between h-full">
        <KeyData value={keyData.calorieCount} type="calorieCount" />
        <KeyData value={keyData.proteinCount} type="proteinCount" />
        <KeyData value={keyData.carbohydrateCount} type="carbohydrateCount" />
        <KeyData value={keyData.lipidCount} type="lipidCount" />
      </div>
    )
  } else {
    return <div>Loading</div>
  }
}

export default KeyDatas

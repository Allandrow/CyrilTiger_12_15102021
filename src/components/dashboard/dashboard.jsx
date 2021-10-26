import React, { useEffect, useState } from 'react'
import { getUserName } from '../../services'
import Headline from '../headline/headline'

const Dashboard = () => {
  const [name, setName] = useState(null)

  useEffect(() => {
    getUserName(setName)
  })

  return (
    <div>
      <Headline name={name} />
    </div>
  )
}

export default Dashboard

import React, { useEffect, useState } from 'react'
import { getUserName } from '../../services'
import Headline from '../headline/headline'
import KeyDatas from '../keyDatas/keyDatas'

const Dashboard = () => {
  const [name, setName] = useState(null)

  useEffect(() => {
    getUserName(setName)
  })

  return (
    // temp padding
    <section className="flex p-16 flex-col flex-1">
      <Headline name={name} />
      <div className='mt-16 flex-1'>
        <KeyDatas />
      </div>
    </section>
  )
}

export default Dashboard

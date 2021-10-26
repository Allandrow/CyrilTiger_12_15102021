import React from 'react'
import Headline from '../headline/headline'
import KeyDatas from '../keyDatas/keyDatas'

const Dashboard = () => {
  return (
    <section className="flex p-16 flex-col flex-1">
      <Headline />
      <div className="mt-16 flex-1">
        <KeyDatas />
      </div>
    </section>
  )
}

export default Dashboard

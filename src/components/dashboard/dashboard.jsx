import React from 'react'
import Charts from '../charts/charts'
import Headline from '../headline/headline'
import KeyDatas from '../keyDatas/keyDatas'

const Dashboard = () => {
  return (
    <section className="flex p-16 flex-col flex-1">
      <Headline />
      <div className="mt-16 flex-1 flex gap-8">
        <Charts />
        <KeyDatas />
      </div>
    </section>
  )
}

export default Dashboard

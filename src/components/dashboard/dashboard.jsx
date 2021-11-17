import React from 'react'
import Charts from '../charts/charts'
import Headline from '../headline/headline'
import KeyDatas from '../keyDatas/keyDatas'

const Dashboard = () => {
  return (
    <section className="flex p-8 flex-col flex-1 order-1 col-span-2">
      <Headline />
      <div className="mt-8 flex-1 grid gap-8 grid-cols-4">
        <Charts />
        <KeyDatas />
      </div>
    </section>
  )
}

export default Dashboard

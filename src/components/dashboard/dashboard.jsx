import React from 'react'
import { useParams } from 'react-router-dom'
import Charts from '../charts/charts'
import Headline from '../headline/headline'
import KeyDatas from '../keyDatas/keyDatas'

const Dashboard = () => {
  const { userId } = useParams()
  return (
    <section className="flex p-8 flex-col flex-1 order-1 col-span-2">
      <Headline />
      <div className="mt-8 flex-1 grid gap-8 grid-cols-4 xxl:mt-16 xxl:grid-flow-col">
        <Charts user={userId}/>
        <KeyDatas />
      </div>
    </section>
  )
}

export default Dashboard

import React from 'react'
import Charts from '../charts/charts'
import Headline from '../headline/headline'
import KeyDatas from '../keyDatas/keyDatas'
import UserIdProvider from '../../layout/userIdContext'

/**
 * Wrapper component containing a context provider and the main content of the profile page
 * @returns {ReactElement} React Component
 */
const Dashboard = () => {
  return (
    <UserIdProvider>
      <section className="flex p-8 pt-32 xl:pl-32 flex-col flex-1 order-1 col-span-2">
        <Headline />
        <div className="mt-8 flex-1 grid gap-8 grid-cols-4 xxl:mt-16 xxl:grid-flow-col">
          <Charts />
          <KeyDatas />
        </div>
      </section>
    </UserIdProvider>
  )
}

export default Dashboard

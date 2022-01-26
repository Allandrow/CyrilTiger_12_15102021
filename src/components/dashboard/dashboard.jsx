import React from 'react'
import Charts from '../charts/charts'
import KeyDatas from '../keyDatas/keyDatas'
import { useParams } from 'react-router-dom'
import { getUserInfos } from '../../hooks/getUserInfos'

/**
 * Wrapper component containing a context provider and the main content of the profile page
 * @returns {ReactElement} React Component
 */
const Dashboard = () => {
  const { userId } = useParams()
  const { loading, error, data } = getUserInfos(userId)

  if (loading) {
    return (
      <section className="p-8 xl:p-16 xxl:p-32 xl:gap-16 flex-1">
        Loading
      </section>
    )
  }

  if (error) {
    return (
      <section className="p-8 xl:p-16 xxl:p-32 xl:gap-16 flex-1">
        <h2 className="text-5xl font-medium">
          Something went wrong while fetching your informations. Please try
          again at an ulterior date.
        </h2>
      </section>
    )
  }

  return (
    <section className="p-8 xl:p-16 xxl:p-32 xl:gap-16 flex-1">
      <header className="mb-8 xxl:mb-16">
        <h2 className="text-5xl font-medium">
          Bonjour{' '}
          <span className="text-primary">{data.userInfos.firstName}</span>
        </h2>
        <br />
        <p className="text-lg">
          Félicitations ! Vous avez explosé vos objectifs hier 👏
        </p>
      </header>
      <div className="grid grid-cols-8 gap-4 xl:gap-8">
        <Charts />
        <KeyDatas />
      </div>
    </section>
  )
}

export default Dashboard

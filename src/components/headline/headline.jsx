import React from 'react'
import { getUserInfos } from '../../hooks/getUserInfos'
import Loader from '../loader/loader'

const Headline = () => {
  const { loading, error, data } = getUserInfos()

  const name = data ? data.userInfos.firstName : 'Visiteur'

  if (loading) {
    // return <div className="flex gap-10 flex-col">Loading</div>
    return <Loader />
  }

  if (error) {
    return <div className="flex gap-10 flex-col">{error}</div>
  }

  return (
    <div className="flex gap-10 flex-col">
      <h2 className="text-5xl font-medium">
        Bonjour <span className="text-primary">{name}</span>
      </h2>
      <p className="text-lg">
        Félicitations ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  )
}

export default Headline

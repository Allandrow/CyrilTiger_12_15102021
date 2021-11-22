import React from 'react'
import { getUserInfos } from '../../hooks/getUserInfos'
import { useUserId } from '../../layout/userIdContext'

const Headline = () => {
  const userId = useUserId()
  const { loading, error, data } = getUserInfos(userId)

  const name = data ? data.userInfos.firstName : 'Visiteur'

  if (loading) {
    return <div className="flex gap-10 flex-col">Loading</div>
  }

  if (error) {
    return <div className="flex gap-10 flex-col">{error}</div>
  }

  return (
    <div className="flex gap-6 flex-col xxl:gap-10">
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

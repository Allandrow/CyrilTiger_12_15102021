import React from 'react'
import { getUserInfos } from '../../hooks/getUserInfos'
import { useUserId } from '../../layout/userIdContext'
import UserGreeting from '../userGreeting/userGreeting'

/**
 * Wrapper component fetching user infos and injecting it in User Greeting component
 * @returns {ReactElement} React Component
 */
const Headline = () => {
  const userId = useUserId()
  const { loading, error, data } = getUserInfos(userId)

  if (loading) {
    return <div className="flex gap-10 flex-col">Loading</div>
  }

  if (error) {
    return <div className="flex gap-10 flex-col">{error}</div>
  }

  return (
    <div className="flex gap-6 flex-col xxl:gap-10">
      <UserGreeting name={data.userInfos.firstName} />
    </div>
  )
}

export default Headline

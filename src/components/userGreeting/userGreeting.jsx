import React from 'react'
import PropTypes from 'prop-types'

const UserGreeting = ({ name }) => {
  return (
    <>
      <h2 className="text-5xl font-medium">
        Bonjour <span className="text-primary">{name}</span>
      </h2>
      <p className="text-lg">
        Félicitations ! Vous avez explosé vos objectifs hier 👏
      </p>
    </>
  )
}

UserGreeting.propTypes = {
  name: PropTypes.string
}

export default UserGreeting

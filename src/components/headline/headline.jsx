import React from 'react'
import PropTypes from 'prop-types'

/**
 * Create a headline with user name
 * @param {string} name user name
 */

const Headline = ({ name }) => {
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

Headline.propTypes = {
  name: PropTypes.string.isRequired
}

export default Headline

import React, { useEffect, useState } from 'react'
import { getUserName } from '../../services'

const Headline = () => {
  const [name, setName] = useState(null)

  useEffect(() => {
    getUserName(setName)
  }, [])

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

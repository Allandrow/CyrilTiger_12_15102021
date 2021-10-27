import React, { useState, useEffect } from 'react'
import { getUserActivity } from '../../services'

const Histogram = () => {
  const [activity, setActivity] = useState(null)

  useEffect(() => {
    getUserActivity(setActivity)
  }, [])

  if (activity) {
    const sessions = activity.map(session => <li key={session.day}>{session.day}, {session.kilogram}, {session.calories}</li>)
    return (
      <div>
        <h2>Histogram</h2>
        <p>Data :</p>
        <ul>{sessions}</ul>
      </div>
    )
  } else {
    return <div>Loading</div>
  }
}

export default Histogram

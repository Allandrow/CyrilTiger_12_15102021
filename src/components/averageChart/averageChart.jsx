import React, { useState, useEffect } from 'react'
import { getUserAverageSessions } from '../../services'

const AverageChart = () => {
  const [sessions, setSessions] = useState(null)

  useEffect(() => {
    getUserAverageSessions(setSessions)
  }, [])

  if (sessions) {
    const list = sessions.map(session => <li key={session.day}>{session.day}, {session.sessionLength}</li>)
    return <div className="flex-1">
      <h2>Average Chart</h2>
      <p>Data :</p>
      <ul>
        {list}
      </ul>
    </div>
  } else {
    return <div>Loading</div>
  }
}

export default AverageChart

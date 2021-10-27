import React, { useEffect, useState } from 'react'
import { getUserScore } from '../../services'

const DailyScore = () => {
  const [score, setScore] = useState(null)

  useEffect(() => {
    getUserScore(setScore)
  }, [])

  return <div className='flex-1'>
    <h2>Daily Score</h2>
    <p>Data :</p>
    <p>{score}</p>
  </div>
}

export default DailyScore

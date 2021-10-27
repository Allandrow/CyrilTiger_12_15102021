import React, { useState, useEffect } from 'react'
import { getUserPerformance } from '../../services'

const Performance = () => {
  const [performance, setPerformance] = useState(null)

  useEffect(() => {
    getUserPerformance(setPerformance)
  }, [])

  if (performance) {
    const data = performance.data.map((item, i) => (
      <li key={item.kind}>
        {performance.kind[i + 1]} : {item.value}
      </li>
    ))

    return (
      <div className="flex-1">
        <h2>Performance</h2>
        <p>Data</p>
        <ul>{data}</ul>
      </div>
    )
  } else {
    return <div>Loading</div>
  }
}

export default Performance

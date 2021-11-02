// service functions fetching mock data
import axios from 'axios'

const userInfosURL = '../src/data/userInfos.json'
const userActivityURL = '../src/data/userActivity.json'
const userAverageSessionURL = '../src/data/userAverageSession.json'
const userPerformanceURL = '../src/data/userPerformance.json'

// TODO : HANDLE ERRORS WITH STATE MANAGEMENT

export const getUserScore = (setData) => {
  axios
    .get(userInfosURL)
    .then((res) => {
      setData(res.data.todayScore)
    })
    .catch((err) => console.error(err))
}

export const getUserActivity = (setData) => {
  axios.get(userActivityURL).then((res) => {
    setData(res.data.sessions)
  })
}

export const getUserAverageSessions = (setData) => {
  axios
    .get(userAverageSessionURL)
    .then((res) => setData(res.data.sessions))
    .catch((err) => console.error(err))
}

export const getUserPerformance = (setData) => {
  axios
    .get(userPerformanceURL)
    .then((res) => setData(res.data))
    .catch((err) => console.error(err))
}

// service functions fetching mock data
import axios from 'axios'

const userPerformanceURL = '../src/data/userPerformance.json'

export const getUserPerformance = (setData) => {
  axios
    .get(userPerformanceURL)
    .then((res) => setData(res.data))
    .catch((err) => console.error(err))
}

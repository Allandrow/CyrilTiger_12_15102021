// service functions fetching mock data
import axios from 'axios'

const userInfosURL = '../src/data/userInfos.json'

export const getUserName = (setData) => {
  axios
    .get(userInfosURL)
    .then((res) => {
      setData(res.data.userInfos.firstName)
    })
    .catch((err) => console.error(err))
}

export const getKeyData = (setData) => {
  axios
    .get(userInfosURL)
    .then((res) => {
      setData(res.data.keyData)
    })
    .catch((err) => console.error(err))
}

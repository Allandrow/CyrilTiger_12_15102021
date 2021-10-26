// service functions fetching mock data
import axios from 'axios'

const userInfosURL = '../src/data/userInfos.json'

export const getUserName = (cb) => {
  axios
    .get(userInfosURL)
    .then((res) => {
      cb(res.data.userInfos.firstName)
    })
    .catch((err) => console.error(err))
}

export const getKeyData = (cb) => {
  axios
    .get(userInfosURL)
    .then((res) => {
      cb(res.data.keyData)
    })
    .catch((err) => console.error(err))
}
